import Plugin from '@ckeditor/ckeditor5-core/src/plugin';

export default class BlockToolbarDisplay extends Plugin {
	init() {
		const editor = this.editor;

		this.hiddenClass = 'hide-toolbar-button';

		// Listen to the same events as the block toolbar update method
		this.listenTo( editor.ui, 'update', () => this.refresh() );
		this.listenTo( editor, 'change:isReadOnly', () => this.refresh(), { priority: 'low' } );
		this.listenTo( editor.ui.focusTracker, 'change:isFocused', () => this.refresh() );
	}

	refresh() {
		const editor = this.editor;
		const model = editor.model;

		// Get the first selected block, button will be attached to this element.
		const modelTarget = Array.from( model.document.selection.getSelectedBlocks() )[ 0 ];

		if ( modelTarget.isEmpty ) {
			this.showToolbarButton();
		} else {
			this.hideToolbarButton();
		}
	}

	showToolbarButton() {
		if ( this.display === true ) {
			return;
		}

		const container = this.getToolbarButtonContainer();

		container.classList.remove( this.hiddenClass );

		this.display = true;
	}

	hideToolbarButton() {
		if ( this.display === false ) {
			return;
		}

		const container = this.getToolbarButtonContainer();

		container.classList.add( this.hiddenClass );

		this.display = false;
	}

	getToolbarButtonContainer() {
		return document.querySelector( '.ck-block-toolbar-button' ).parentElement;
	}
}
