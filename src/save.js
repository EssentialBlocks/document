/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#save
 *
 * @return {WPElement} Element to render.
 */

const save = ({attributes}) => {
	const {href, mime, id, width, height, powered_by} = attributes
	const iframeSrc = '//view.officeapps.live.com/op/embed.aspx?src=' + href;
	const defaultClass = "embedpress-embed-document"
	return (
		<figure className={defaultClass}>
			{mime === 'application/pdf' && (
				<div style={{height: height, width: width}} className={'embedpress-embed-document-pdf' + ' ' + id}
					 data-emid={id} data-emsrc={href}></div>
			)}
			{mime !== 'application/pdf' && (
				<iframe style={{height: height, width: width}} src={iframeSrc} mozallowfullscreen="true"
						webkitallowfullscreen="true"/>
			)}
			{powered_by && (
				<p className="embedpress-el-powered">Powered By EmbedPress</p>
			)}
		</figure>
	);
}
export default save;
