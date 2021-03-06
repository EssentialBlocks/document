/**
 * BLOCK: Document
 *
 * Registering a basic block with Gutenberg.
 * Simple block, renders and saves the same content without any interactivity.
 */

//  Import CSS.
import './style.scss';
import './editor.scss';
import Edit from './edit';
import save from './save';

import {DocumentIcon} from './icons';
import {__} from '@wordpress/i18n';
import {registerBlockType} from '@wordpress/blocks'; // Import registerBlockType() from wp.blocks


/**
 * Register: aa Gutenberg Block.
 *
 * Registers a new block provided a unique name and an object defining its
 * behavior. Once registered, the block is made editor as an option to any
 * editor interface where blocks are implemented.
 *
 * @link https://wordpress.org/gutenberg/handbook/block-api/
 * @param  {string}   name     Block name.
 * @param  {Object}   settings Block settings.
 * @return {?WPBlock}          The block, if it has been successfully
 *                             registered; otherwise `undefined`.
 */
registerBlockType('block/document', {
	// Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.
	title: __('Document'), // Block title.
	icon: DocumentIcon, // Block icon from Dashicons → https://developer.wordpress.org/resource/dashicons/.
	category: 'embed', // Block category — Group blocks together based on common traits E.g. common, formatting, layout Widgets, embed.
	keywords: [
		__('pdf'),
		__('doc'),
		__('ppt'),
	],
	supports: {align: ["wide", "full"], default: ''},
	attributes: {
		id: {
			type: "string"
		},
		href: {
			type: "string"
		},
		powered_by: {
			type: "boolean",
			default: true,
		},
		width: {
			type: 'number',
			default: 600,
		},
		height: {
			type: 'number',
			default: 600,
		},
		fileName: {
			type: "string",
		},
		mime: {
			type: "string",
		}
	},
	/**
	 * The edit function describes the structure of your block in the context of the editor.
	 * This represents what the editor will render when the block is used.
	 *
	 * The "edit" property must be a valid function.
	 *
	 * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/
	 */
	edit: Edit,

	/**
	 * The save function defines the way in which the different attributes should be combined
	 * into the final markup, which is then serialized by Gutenberg into post_content.
	 *
	 * The "save" property must be specified and must be a valid function.
	 *
	 * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/
	 */
	//save
	save
});
