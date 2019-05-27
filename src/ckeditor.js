/**
 * @license Copyright (c) 2003-2019, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md.
 */

// The editor creator to use.
import BalloonEditorBase from '@ckeditor/ckeditor5-editor-balloon/src/ballooneditor';

import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials';
import UploadAdapter from '@ckeditor/ckeditor5-adapter-ckfinder/src/uploadadapter';
import Autoformat from '@ckeditor/ckeditor5-autoformat/src/autoformat';
import BlockToolbar from '@ckeditor/ckeditor5-ui/src/toolbar/block/blocktoolbar';
import Bold from '@ckeditor/ckeditor5-basic-styles/src/bold';
import Italic from '@ckeditor/ckeditor5-basic-styles/src/italic';
import BlockQuote from '@ckeditor/ckeditor5-block-quote/src/blockquote';
import CKFinder from '@ckeditor/ckeditor5-ckfinder/src/ckfinder';
import EasyImage from '@ckeditor/ckeditor5-easy-image/src/easyimage';
import Heading from '@ckeditor/ckeditor5-heading/src/heading';
import Image from '@ckeditor/ckeditor5-image/src/image';
import ImageCaption from '@ckeditor/ckeditor5-image/src/imagecaption';
import ImageStyle from '@ckeditor/ckeditor5-image/src/imagestyle';
import ImageToolbar from '@ckeditor/ckeditor5-image/src/imagetoolbar';
import ImageUpload from '@ckeditor/ckeditor5-image/src/imageupload';
import Link from '@ckeditor/ckeditor5-link/src/link';
import List from '@ckeditor/ckeditor5-list/src/list';
import MediaEmbed from '@ckeditor/ckeditor5-media-embed/src/mediaembed';
import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph';
import PasteFromOffice from '@ckeditor/ckeditor5-paste-from-office/src/pastefromoffice';

import BlockToolbarDisplay from './plugins/blocktoolbardisplay';
import HeadingButtons from './plugins/headingbuttons';

import '../theme/theme.css';
import outsetLeftIcon from '../theme/icons/image-outset-left.svg';
import insetCenterIcon from '../theme/icons/image-inset-center.svg';
import outsetCenterIcon from '../theme/icons/image-outset-center.svg';
import fullWidthIcon from '../theme/icons/image-full-width.svg';

export default class BalloonEditor extends BalloonEditorBase {}

// Plugins to include in the build.
BalloonEditor.builtinPlugins = [
	Essentials,
	UploadAdapter,
	Autoformat,
	BlockToolbar,
	BlockToolbarDisplay,
	Bold,
	Italic,
	BlockQuote,
	CKFinder,
	EasyImage,
	Heading,
	HeadingButtons,
	Image,
	ImageCaption,
	ImageStyle,
	ImageToolbar,
	ImageUpload,
	Link,
	List,
	MediaEmbed,
	Paragraph,
	PasteFromOffice
];

// Editor configuration.
BalloonEditor.defaultConfig = {
	blockToolbar: [
		'imageUpload',
		'mediaEmbed'
	],
	toolbar: {
		items: [
			'bold',
			'italic',
			'link',
			'heading1',
			'heading2',
			'blockQuote',
		]
	},
	image: {
		styles: [
			{
				name: 'outsetLeft',
				title: 'Outset left',
				icon: outsetLeftIcon,
				className: 'outset-left'
			},
			{
				name: 'insetCenter',
				title: 'Inset center',
				icon: insetCenterIcon,
				isDefault: true,
				className: 'inset-center'
			},
			{
				name: 'outsetCenter',
				title: 'Outset center',
				icon: outsetCenterIcon,
				className: 'outset-center'
			},
			{
				name: 'fullWidth',
				title: 'Full width',
				icon: fullWidthIcon,
				className: 'full-width'
			}
		],
		toolbar: [
			'imageStyle:outsetLeft',
			'imageStyle:insetCenter',
			'imageStyle:outsetCenter',
			'imageStyle:fullWidth',
			'|',
			'imageTextAlternative'
		]
	},
	// This value must be kept in sync with the language defined in webpack.config.js.
	language: 'en',
	placeholder: 'Tell your story...',
};
