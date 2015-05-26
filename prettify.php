<?php
/*
Plugin Name: G-prettify
Plugin URI: http://googlo.me/archives/3255.html
Description: 乐趣公园代码高亮插件,本插件只在文本环境下有效，点击按钮，然后粘贴代码即可，兼容基于google-code-prettify代码高亮的插件&主题
Version: 4.0
Author: 云落
Author URI: http://googlo.me/
*/
//首先头部加载样式
function prettify_head() {
    echo '<style type="text/css">.prettyprint,pre.prettyprint{white-space:pre-wrap;word-wrap:break-word;background-color:#444;border:1px solid #272822;overflow:hidden;padding:0;margin:20px 0;font:14px/20px "courier new";color:#666;-webkit-border-radius:5px;-moz-border-radius:5px;border-radius:5px}.prettyprint.linenums,pre.prettyprint.linenums{-webkit-box-shadow:inset 40px 0 0 #39382e,inset 41px 0 0 #464741;-moz-box-shadow:inset 40px 0 0 #39382e,inset 41px 0 0 #464741;box-shadow:inset 40px 0 0 #39382e,inset 41px 0 0 #464741}.prettyprint.linenums ol,pre.prettyprint.linenums ol{margin:0 0 0 33px}.prettyprint.linenums ol li,pre.prettyprint.linenums ol li{color:#bebec5;line-height:20px;margin-left:0;list-style:decimal}.prettyprint ol.linenums{margin-bottom:0;background-color:#272822;padding:0}.prettyprint .com{color:#93a1a1}.prettyprint .lit{color:#ae81ff}.prettyprint .pun,.prettyprint .opn,.prettyprint .clo{color:#f8f8f2}.prettyprint .fun{color:#dc322f}.prettyprint .str,.prettyprint .atv{color:#e6db74}.prettyprint .kwd,.prettyprint .tag{color:#f92659}.prettyprint .typ,.prettyprint .atn,.prettyprint .dec,.prettyprint .var{color:#a6e22e}.prettyprint .pln{color:#66d9ef}</style>';
}
add_action('wp_head', 'prettify_head');
//防止代码转义
function g_prettify_esc_html($content)
{
    $regex = '/(<pre\s+[^>]*?class\s*?=\s*?[",\'].*?prettyprint.*?[",\'].*?>)(.*?)(<\/pre>)/sim';
    return preg_replace_callback($regex, g_prettify_esc_callback, $content);
}
function g_prettify_esc_callback($matches)
{
    $tag_open = $matches[1];
    $content = $matches[2];
    $tag_close = $matches[3];
    $content = esc_html($content);
    return $tag_open . $content . $tag_close;
}
add_filter('the_content', 'g_prettify_esc_html', 2);
add_filter('comment_text', 'g_prettify_esc_html', 2);

//强制兼容<pre>
function g_prettify_replace($text){
	$replace = array( '<pre>' => '<pre class="prettyprint" >' );
	$text = str_replace(array_keys($replace), $replace, $text);
	return $text;
}
add_filter('the_content', 'g_prettify_replace');
//页脚加载javascript文件
function prettify(){
	$prettify_url = plugins_url('/prettify.js', __FILE__);
?>
	<?php if( is_single() ){?><script type="text/javascript" src="<?php echo $prettify_url; ?>"></script><?php } ?>
<?php
}
add_action('get_footer','prettify');

//后台编辑器添加按钮
function prettify_bottom($mce_settings) {
?>
<script type="text/javascript">
QTags.addButton( 'kkpre', 'G-Prettify', '<pre class="prettyprint linenums" >\n\n</pre>', "" );//添加高亮代码
QTags.addButton( 'i</>', '</>', "&lt;", "&gt;" );
function prettify_bottom() {
}
</script>
<?php
}
add_action('after_wp_tiny_mce', 'prettify_bottom');
?>