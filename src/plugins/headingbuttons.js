import Plugin from '@ckeditor/ckeditor5-core/src/plugin';

import heading1Icon from '../../theme/icons/heading1.svg';
import heading2Icon from '../../theme/icons/heading2.svg';

import ButtonView from '@ckeditor/ckeditor5-ui/src/button/buttonview';

export default class HeadingButtons extends Plugin {
	init() {
		const headingOptions = [
			{
				model: 'heading1',
				title: 'Heading 1',
				class: 'ck-heading_heading1',
				icon: heading1Icon
			},
			{
				model: 'heading2',
				title: 'Heading 2',
				class: 'ck-heading_heading2',
				icon: heading2Icon
			}
		];

		headingOptions.map( item => this._createButton( item ) );
	}

	/**
	 * Creates single button view from provided configuration option.
	 *
	 * @private
	 * @param {Object} option
	 */
	_createButton( option ) {
		const editor = this.editor;

		editor.ui.componentFactory.add( option.model, locale => {
			const view = new ButtonView( locale );
			const command = editor.commands.get( 'heading' );

			view.label = option.title;
			view.icon = option.icon;
			view.tooltip = true;
			view.bind( 'isEnabled' ).to( command );
			view.bind( 'isOn' ).to( command, 'value', value => value == option.model );

			view.on( 'execute', () => {
				if ( command.value == option.model ) {
					editor.execute( 'paragraph' );
				} else {
					editor.execute( 'heading', { value: option.model } );
				}
			} );

			return view;
		} );
	}
}
