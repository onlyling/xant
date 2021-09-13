import type { TextStyle, ViewStyle } from 'react-native';

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
export const background_color = '#EDEFF2';
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
export const font_weight_bold: TextStyle['fontWeight'] = 'bold';
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

// Badge
export const badge_size: number = 16;
export const badge_color = white;
export const badge_padding_vertical: number = 0;
export const badge_padding_horizontal: number = 3;
export const badge_font_size = font_size_xs;
export const badge_font_weight = font_weight_bold;
export const badge_border_width = border_width_base;
export const badge_background_color = red;
export const badge_dot_color = red;
export const badge_dot_size: number = 8;
export const badge_font_family: string = '-apple-system-font, Helvetica Neue, Arial, sans-serif';

// ActionBar
export const action_bar_background_color = white;
export const action_bar_height: number = 50;
export const action_bar_icon_width: number = 48;
export const action_bar_icon_height: string = '100%';
export const action_bar_icon_color = text_color;
export const action_bar_icon_size: number = 18;
export const action_bar_icon_font_size: number = font_size_xs;
export const action_bar_icon_active_color = active_color;
export const action_bar_icon_text_color = gray_7;
export const action_bar_button_height: number = 40;
export const action_bar_button_warning_color = orange; // 原生不支持渐变，暂时不弄渐变
export const action_bar_button_danger_color = red; // 原生不支持渐变，暂时不弄渐变

// ActionSheet
export const action_sheet_max_height: string | number = '80%';
export const action_sheet_header_height: number = 48;
export const action_sheet_header_font_size = font_size_lg;
export const action_sheet_description_color = gray_6;
export const action_sheet_description_font_size = font_size_md;
export const action_sheet_description_line_height = line_height_md;
export const action_sheet_item_background = white;
export const action_sheet_item_font_size = font_size_lg;
export const action_sheet_item_line_height = line_height_lg;
export const action_sheet_item_text_color = text_color;
export const action_sheet_item_disabled_text_color = gray_5;
export const action_sheet_subname_color = gray_6;
export const action_sheet_subname_font_size = font_size_sm;
export const action_sheet_subname_line_height = line_height_sm;
export const action_sheet_cancel_text_color = gray_7;
export const action_sheet_cancel_padding_top = padding_xs;
export const action_sheet_cancel_padding_color = background_color;
export const action_sheet_loading_icon_size: number = 22;

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
export const cell_padding_vertical: number = 10;
export const cell_padding_horizontal = padding_md;
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
export const cell_large_padding_vertical = padding_sm;
export const cell_large_title_font_size = font_size_lg;
export const cell_large_label_font_size = font_size_md;

// CellGroup
export const cell_group_background_color = white;
export const cell_group_title_color = gray_6;
export const cell_group_title_padding_horizontal = padding_md;
export const cell_group_title_padding_top = padding_xs;
export const cell_group_title_padding_bottom = padding_xs;
export const cell_group_title_font_size = font_size_md;
export const cell_group_title_line_height: number = 16;

// Checkbox
export const checkbox_icon_border_color = gray_5;
export const checkbox_icon_size: number = 20;
export const checkbox_disabled_background_color = border_color;
export const checkbox_checked_icon_color = primary;
export const checkbox_label_color = text_color;
export const checkbox_label_margin = padding_xs;
export const checkbox_disabled_label_color = gray_5;

// Collapse
export const collapse_transition_duration = animation_duration_base;
export const collapse_title_font_size = font_size_md;
export const collapse_title_line_height = 24;
export const collapse_title_padding_vertical: number = 10;
export const collapse_title_padding_horizontal: number = padding_md;
export const collapse_title_text_color = text_color;
export const collapse_title_icon_color = text_color;
export const collapse_title_icon_size = font_size_md;
export const collapse_title_border_color = border_color;
export const collapse_title_background_color = white;
export const collapse_content_background_color = white;
export const collapse_content_padding_horizontal = padding_md;

// Dialog
export const dialog_width: number = 320;
export const dialog_font_size = font_size_lg;
export const dialog_transition = animation_duration_base;
export const dialog_border_radius: number = 16;
export const dialog_background_color = white;
export const dialog_header_font_weight = font_weight_bold;
export const dialog_header_line_height: number = 24;
export const dialog_header_padding_top: number = 26;
export const dialog_message_padding_vertical = padding_lg;
export const dialog_message_padding_horizontal = padding_lg;
export const dialog_message_font_size = font_size_md;
export const dialog_message_line_height = line_height_md;
export const dialog_has_title_message_text_color = gray_7;
export const dialog_has_title_message_padding_top = padding_xs;
export const dialog_button_height: number = 48;
export const dialog_round_button_height: number = 36;
export const dialog_confirm_button_text_color = primary;
export const dialog_cancel_button_text_color = black;

// Divider
export const divider_margin_vertical = padding_md;
export const divider_margin_horizontal = padding_md;
export const divider_text_color = gray_6;
export const divider_font_size = font_size_md;
export const divider_line_height: number = 24;
export const divider_border_color = border_color;
export const divider_content_padding = padding_md;
export const divider_content_left_width: string = '10%';
export const divider_content_right_width: string = '10%';

// DropdownMenu
export const dropdown_menu_height: number = 48;
export const dropdown_menu_background_color = white;
export const dropdown_menu_title_font_size: number = 15;
export const dropdown_menu_title_text_color = text_color;
export const dropdown_menu_title_active_text_color = primary;
export const dropdown_menu_title_disabled_text_color = gray_6;
export const dropdown_menu_title_padding_horizontal = padding_base;
export const dropdown_menu_title_line_height = line_height_lg;
export const dropdown_menu_option_active_color = primary;

// Field
export const field_label_width: number = 86; // rem
export const field_label_color = gray_7;
export const field_label_margin_right = padding_sm;

// Loading
export const loading_text_color = gray_6;
export const loading_text_font_size = font_size_md;
export const loading_spinner_color = gray_5;
export const loading_spinner_size: number = 24;
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

// Notify
export const notify_text_color = white;
export const notify_padding_vertical = padding_xs;
export const notify_padding_horizontal = padding_md;
export const notify_font_size = font_size_md;
export const notify_line_height = line_height_md;
export const notify_primary_background_color = primary;
export const notify_success_background_color = green;
export const notify_danger_background_color = red;
export const notify_warning_background_color = orange;

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

// Progress
export const progress_height: number = 4;
export const progress_color = primary;
export const progress_background_color = gray_3;
export const progress_pivot_horizontal_padding: number = 5;
export const progress_pivot_text_color = white;
export const progress_pivot_font_size = font_size_xs;
export const progress_pivot_line_height_scale: number = 1.6;
export const progress_pivot_background_color = primary;
export const progress_page_background_color = white;

// Switch
export const switch_size: number = 30;
export const switch_width_ratio: number = 2; // 原变量中使用了 em，这里改成对应的比例
export const switch_height_ratio: number = 1; // 原变量中使用了 em，这里改成对应的比例
export const switch_node_size_ratio: number = 1; // 原变量中使用了 em，这里改成对应的比例
export const switch_node_background_color = white;
// export const switch_node_box_shadow: 0 3px 1px 0 rgba(0, 0, 0, 0.05),
//   0 2px 2px 0 rgba(0, 0, 0, 0.1), 0 3px 3px 0 rgba(0, 0, 0, 0.05);
export const switch_background_color = white;
export const switch_on_background_color = blue;
export const switch_transition_duration = animation_duration_base;
export const switch_disabled_opacity = disabled_opacity;
export const switch_border_width = border_width_base;
export const switch_border_style: ViewStyle['borderStyle'] = 'solid';
export const switch_border_color: string = 'rgba(0, 0, 0, 0.1)';
// export const switch_border: @border-width-base solid rgba(0, 0, 0, 0.1);
export const popup_close_icon_z_index: number = 1;

// Tag
export const tag_padding_horizontal = padding_base;
export const tag_text_color = white;
export const tag_font_size = font_size_sm;
export const tag_border_radius: number = 2;
export const tag_line_height: number = 16;
export const tag_medium_padding_vertical: number = 2;
export const tag_medium_padding_horizontal: number = 6;
export const tag_large_padding_vertical = padding_base;
export const tag_large_padding_horizontal = padding_xs;
export const tag_large_border_radius = border_radius_md;
export const tag_large_font_size = font_size_md;
export const tag_round_border_radius = border_radius_max;
export const tag_danger_color = red;
export const tag_primary_color = blue;
export const tag_success_color = green;
export const tag_warning_color = orange;
export const tag_default_color = gray_6;
export const tag_plain_background_color = white;

// TextInput
export const text_input_color = gray_7;
export const text_input_font_size = font_size_md;
export const text_input_padding_horizontal: number = padding_sm;
export const text_input_padding_vertical: number = padding_sm;
export const text_input_selection_color = primary;
export const text_input_placeholder_text_color = gray_5;
export const text_input_min_height: number = 20;
export const text_input_clearable_size: number = 16;
export const text_input_clearable_background_color = gray_4;
export const text_input_clearable_color: string = '#fff';

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
export const toast_text_padding_vertical = padding_xs;
export const toast_text_padding_horizontal = padding_sm;
export const toast_default_padding_vertical = padding_md;
export const toast_default_padding_horizontal = padding_md;
export const toast_default_width: number = 88 + padding_md * 2; // box-sizing: content-box 但是 RN 无法设置，计算了一下
export const toast_default_min_height: number = 88 + padding_md * 2;
export const toast_position_top_distance: string = '20%';
export const toast_position_bottom_distance: string = '20%';
