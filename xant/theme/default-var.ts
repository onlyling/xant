export const black: string = '#000';
export const white: string = '#fff';
export const gray_1: string = '#f7f8fa';
export const gray_2: string = '#f2f3f5';
export const gray_3: string = '#ebedf0';
export const gray_4: string = '#dcdee0';
export const gray_5: string = '#c8c9cc';
export const gray_6: string = '#969799';
export const gray_7: string = '#646566';
export const gray_8: string = '#323233';
export const red: string = '#ee0a24';
export const blue: string = '#1989fa';
export const orange: string = '#ff976a';
export const orange_dark: string = '#ed6a0c';
export const orange_light: string = '#fffbe8';
export const green: string = '#07c160';
export const primary: string = blue;

// Component Colors
export const text_color = gray_8;
export const active_color = gray_2;
export const active_opacity: number = 0.7;
export const disabled_opacity: number = 0.5;
export const background_color = gray_1;
export const background_color_light: string = '#fafafa';
export const text_link_color: string = '#576b95';

// Padding
export const padding_base: number = 4;
export const padding_xs = padding_base * 2;
export const padding_sm = padding_base * 3;
export const padding_md = padding_base * 4;
export const padding_lg = padding_base * 6;
export const padding_xl = padding_base * 8;

// Font
export const font_size_xs: number = 10;
export const font_size_sm: number = 12;
export const font_size_md: number = 14;
export const font_size_lg: number = 16;
export const font_weight_bold: number = 500;
export const line_height_xs: number = 14;
export const line_height_sm: number = 18;
export const line_height_md: number = 20;
export const line_height_lg: number = 22;
export const base_font_family: string = `-apple-system, BlinkMacSystemFont, 'Helvetica Neue',
Helvetica, Segoe UI, Arial, Roboto, 'PingFang SC', 'miui', 'Hiragino Sans GB',
'Microsoft Yahei', sans-serif`;
export const price_integer_font_family: string = `Avenir-Heavy, PingFang SC, Helvetica Neue, Arial,
sans-serif`;

// Animation
export const animation_duration_base: number = 300;
export const animation_duration_fast: number = 200;

// Border
export const border_color = gray_3;
export const border_width_base: number = 1;
export const border_radius_sm: number = 2;
export const border_radius_md: number = 4;
export const border_radius_lg: number = 8;
export const border_radius_max: number = 999;

// Button
export const button_mini_height: number = 24;
export const button_mini_font_size = font_size_xs;
export const button_small_height: number = 32;
export const button_small_font_size = font_size_sm;
export const button_normal_font_size = font_size_md;
export const button_large_height: number = 50;
export const button_default_height: number = 44;
export const button_default_line_height: number = 1.2;
export const button_default_font_size = font_size_lg;
export const button_default_color = text_color;
export const button_default_background_color = white;
export const button_default_border_color = border_color;
export const button_primary_color = white;
export const button_primary_background_color = primary;
export const button_primary_border_color = primary;
export const button_success_color = white;
export const button_success_background_color = green;
export const button_success_border_color = green;
export const button_danger_color = white;
export const button_danger_background_color = red;
export const button_danger_border_color = red;
export const button_warning_color = white;
export const button_warning_background_color = orange;
export const button_warning_border_color = orange;
export const button_border_width = border_width_base;
export const button_border_radius = border_radius_sm;
export const button_round_border_radius = border_radius_max;
export const button_plain_background_color = white;
export const button_plain_underlay_color = border_color; // 按钮按下去的颜色
export const button_disabled_opacity = disabled_opacity;

// Cell
export const cell_font_size = font_size_md;
export const cell_line_height: number = 24;
export const cell_vertical_padding: number = 10;
export const cell_horizontal_padding = padding_md;
export const cell_text_color = text_color;
export const cell_background_color = white;
export const cell_border_color = border_color;
export const cell_active_color = active_color;
export const cell_required_color = red;
export const cell_label_color = gray_6;
export const cell_label_font_size = font_size_sm;
export const cell_label_line_height = line_height_sm;
export const cell_label_margin_top = padding_base;
export const cell_value_color = gray_6;
export const cell_icon_size: number = 16;
export const cell_right_icon_color = gray_6;
export const cell_large_vertical_padding = padding_sm;
export const cell_large_title_font_size = font_size_lg;
export const cell_large_label_font_size = font_size_md;

// CellGroup
export const cell_group_background_color = white;
export const cell_group_title_color = gray_6;
export const cell_group_title_padding_horizontal = padding_md;
export const cell_group_title_padding_top = padding_md;
export const cell_group_title_padding_bottom = padding_xs;
export const cell_group_title_font_size = font_size_md;
export const cell_group_title_line_height: number = 16;

// Divider
export const divider_vertical_margin = padding_md;
export const divider_horizontal_margin = padding_md;
export const divider_text_color = gray_6;
export const divider_font_size = font_size_md;
export const divider_line_height: number = 24;
export const divider_border_color = border_color;
export const divider_content_padding = padding_md;
export const divider_content_left_width: string = '10%';
export const divider_content_right_width: string = '10%';

// Loading
export const loading_text_color = gray_6;
export const loading_text_font_size = font_size_md;
export const loading_spinner_color = gray_5;
export const loading_spinner_size: number = 30;
export const loading_spinner_animation_duration: number = 0.8;

// NavBar
export const nav_bar_height: number = 46;
export const nav_bar_background_color = white;
export const nav_bar_arrow_size: number = 16;
export const nav_bar_icon_color = blue;
export const nav_bar_text_color = blue;
export const nav_bar_title_font_size = font_size_lg;
export const nav_bar_title_text_color = text_color;
export const nav_bar_z_index: number = 1;

// Image
export const image_default_size: number = 100; // 图片默认尺寸
export const image_placeholder_text_color = gray_6;
export const image_placeholder_font_size = font_size_md;
export const image_placeholder_background_color = background_color;
export const image_loading_icon_size: number = 32;
export const image_loading_icon_color = gray_4;
export const image_error_icon_size: number = 32;
export const image_error_icon_color = gray_4;

// Overlay
export const overlay_z_index: number = 1;
export const overlay_background_color: string = 'rgba(0, 0, 0, 0.7)';

// Popup
export const popup_background_color = white;
// export const popup_transition: transform @animation-duration-base;
export const popup_round_border_radius: number = 16;
export const popup_close_icon_size: number = 22;
export const popup_close_icon_color = gray_5;
export const popup_close_icon_active_color = gray_6;
export const popup_close_icon_margin: number = 16;
export const popup_close_icon_z_index: number = 1;

// Tag
export const tag_horizontal_padding = padding_base;
export const tag_text_color = white;
export const tag_font_size = font_size_sm;
export const tag_border_radius: number = 2;
export const tag_line_height: number = 16;
export const tag_medium_vertical_padding: number = 2;
export const tag_medium_horizontal_padding: number = 6;
export const tag_large_vertical_padding = padding_base;
export const tag_large_horizontal_padding = padding_xs;
export const tag_large_border_radius = border_radius_md;
export const tag_large_font_size = font_size_md;
export const tag_round_border_radius = border_radius_max;
export const tag_danger_color = red;
export const tag_primary_color = blue;
export const tag_success_color = green;
export const tag_warning_color = orange;
export const tag_default_color = gray_6;
export const tag_plain_background_color = white;

// Toast
export const toast_max_width: string = '70%';
export const toast_font_size = font_size_md;
export const toast_text_color = white;
export const toast_loading_icon_color = white;
export const toast_line_height = line_height_md;
export const toast_border_radius = border_radius_lg;
export const toast_background_color: string = 'rgba(0,0,0,0.7)';
export const toast_icon_size: number = 36;
export const toast_text_min_width: number = 96;
export const toast_text_vertical_padding = padding_xs;
export const toast_text_horizontal_padding = padding_sm;
export const toast_default_vertical_padding = padding_md;
export const toast_default_horizontal_padding = padding_md;
export const toast_default_width: number = 88 + padding_md * 2; // box-sizing: content-box 但是 RN 无法设置，计算了一下
export const toast_default_min_height: number = 88 + padding_md * 2;
export const toast_position_top_distance: string = '20%';
export const toast_position_bottom_distance: string = '20%';
