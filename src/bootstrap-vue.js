import Vue from 'vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

import { BTime } from '@bootstrap-vue/components/time/time';
import { BBreadcrumb } from '@bootstrap-vue/components/breadcrumb/breadcrumb';
import { BButton } from '@bootstrap-vue/components/button/button';
import { BCalendar } from '@bootstrap-vue/components/calendar/calendar';
import { BCard } from '@bootstrap-vue/components/card/card';
// export { BCardBody } from '@bootstrap-vue/components/card/card-body'
// export { BCardFooter } from '@bootstrap-vue/components/card/card-footer'
// export { BCardGroup } from '@bootstrap-vue/components/card/card-group'
// export { BCardHeader } from '@bootstrap-vue/components/card/card-header'
// export { BCardImg } from '@bootstrap-vue/components/card/card-img'
// export { BCardImgLazy } from '@bootstrap-vue/components/card/card-img-lazy'
// export { BCardSubTitle } from '@bootstrap-vue/components/card/card-sub-title'
// export { BCardText } from '@bootstrap-vue/components/card/card-text'
// export { BCardTitle } from '@bootstrap-vue/components/card/card-title'
import { BCarousel } from '@bootstrap-vue/components/carousel/carousel';
import { BCarouselSlide } from '@bootstrap-vue/components/carousel/carousel-slide'
import { BCollapse } from '@bootstrap-vue/components/collapse/collapse';
import { BDropdown } from '@bootstrap-vue/components/dropdown/dropdown';
import { BDropdownItem } from '@bootstrap-vue/components/dropdown/dropdown-item'
// import { BDropdownItemButton } from '@bootstrap-vue/components/dropdown/dropdown-item-button'
import { BDropdownDivider } from '@bootstrap-vue/components/dropdown/dropdown-divider'
// import { BDropdownForm } from '@bootstrap-vue/components/dropdown/dropdown-form'
// import { BDropdownGroup } from '@bootstrap-vue/components/dropdown/dropdown-group'
// import { BDropdownHeader } from '@bootstrap-vue/components/dropdown/dropdown-header'
// import { BDropdownText } from '@bootstrap-vue/components/dropdown/dropdown-text'
import { BForm } from '@bootstrap-vue/components/form/form';
import { BFormCheckboxGroup } from '@bootstrap-vue/components/form-checkbox/form-checkbox-group';
import { BFormCheckbox } from '@bootstrap-vue/components/form-checkbox/form-checkbox';
import { BFormDatepicker } from '@bootstrap-vue/components/form-datepicker/form-datepicker';
import { BFormFile } from '@bootstrap-vue/components/form-file/form-file';
import { BFormGroup } from '@bootstrap-vue/components/form-group/form-group';
import { BFormInput } from '@bootstrap-vue/components/form-input/form-input';
import { BFormRadioGroup } from '@bootstrap-vue/components/form-radio/form-radio-group';
import { BFormSelect } from '@bootstrap-vue/components/form-select/form-select';
// import { BFormSelectOption } from '@bootstrap-vue/components/form-select/form-select-option'
// import { BFormSelectOptionGroup } from '@bootstrap-vue/components/form-select/form-select-option-group'
import { BFormSpinbutton } from '@bootstrap-vue/components/form-spinbutton/form-spinbutton';
import { BFormTextarea } from '@bootstrap-vue/components/form-textarea/form-textarea';
import { BFormTimepicker } from '@bootstrap-vue/components/form-timepicker/form-timepicker';
import { BImg } from '@bootstrap-vue/components/image/img';
import { BImgLazy } from '@bootstrap-vue/components/image/img-lazy';
import { BInputGroup } from '@bootstrap-vue/components/input-group/input-group';
// import { BInputGroupAddon } from '@bootstrap-vue/components/input-group/input-group-addon'
// import { BInputGroupAppend } from '@bootstrap-vue/components/input-group/input-group-append'
// import { BInputGroupPrepend } from '@bootstrap-vue/components/input-group/input-group-prepend'
// import { BInputGroupText } from '@bootstrap-vue/components/input-group/input-group-text'
import { BModal } from '@bootstrap-vue/components/modal/modal';
import { BNav } from '@bootstrap-vue/components/nav/nav';
// import { BNavForm } from '@bootstrap-vue/components/nav/nav-form'
// import { BNavItem } from '@bootstrap-vue/components/nav/nav-item'
// import { BNavItemDropdown } from '@bootstrap-vue/components/nav/nav-item-dropdown'
// import { BNavText } from '@bootstrap-vue/components/nav/nav-text'
import { BNavbar } from '@bootstrap-vue/components/navbar/navbar';
// import { BNavbar } from '@bootstrap-vue/components/navbar/navbar'
// import { BNavbarBrand } from '@bootstrap-vue/components/navbar/navbar-brand'
// import { BNavbarNav } from '@bootstrap-vue/components/navbar/navbar-nav'
// import { BNavbarToggle } from '@bootstrap-vue/components/navbar/navbar-toggle'
import { BPagination } from '@bootstrap-vue/components/pagination/pagination';
import { BPaginationNav } from '@bootstrap-vue/components/pagination-nav/pagination-nav';
import { BProgress } from '@bootstrap-vue/components/progress/progress';
import { BProgressBar } from '@bootstrap-vue/components/progress/progress-bar';
import { BSpinner } from '@bootstrap-vue/components/spinner/spinner';
import { BTable } from '@bootstrap-vue/components/table/table';
import { BTableLite } from '@bootstrap-vue/components/table/table-lite'
import { BTableSimple } from '@bootstrap-vue/components/table/table-simple'
import { BTbody } from '@bootstrap-vue/components/table/tbody'
import { BThead } from '@bootstrap-vue/components/table/thead'
import { BTfoot } from '@bootstrap-vue/components/table/tfoot'
import { BTr } from '@bootstrap-vue/components/table/tr'
import { BTh } from '@bootstrap-vue/components/table/th'
import { BTd } from '@bootstrap-vue/components/table/td'
import { BTabs } from '@bootstrap-vue/components/tabs/tabs';
import { BTab } from '@bootstrap-vue/components/tabs/tab'
import { BTooltip } from '@bootstrap-vue/components/tooltip/tooltip';
import { BToast } from '@bootstrap-vue/components/toast/toast';
import { BVToastPlugin } from '@bootstrap-vue/components/toast/helpers/bv-toast';
// import { BToaster } from '@bootstrap-vue/components/toast/toaster'
import { BIcon } from '@bootstrap-vue/icons/icon';
import { BPopover } from '@bootstrap-vue/components/popover/popover'

Vue.component('b-time', BTime);
Vue.component('b-breadcrumb', BBreadcrumb);
Vue.component('b-button', BButton);
Vue.component('b-calendar', BCalendar);
Vue.component('b-card', BCard);
// Vue.component('b-card', BCardFooter);
// Vue.component('b-card', BCardGroup);
// Vue.component('b-card', BCardHeader);
// Vue.component('b-card', BCardImg);
// Vue.component('b-card', BCardImgLazy);
// Vue.component('b-card', BCardSubTitle);
// Vue.component('b-card', BCardText);
// Vue.component('b-card', BCardTitle);
Vue.component('b-carousel', BCarousel);
Vue.component('b-carousel-slide', BCarouselSlide);
Vue.component('b-collapse', BCollapse);
Vue.component('b-dropdown', BDropdown);
Vue.component('b-dropdown-item', BDropdownItem);
// Vue.component('b-dropdown', BDropdownItemButton);
Vue.component('b-dropdown-divider', BDropdownDivider);
// Vue.component('b-dropdown', BDropdownForm);
// Vue.component('b-dropdown', BDropdownGroup);
// Vue.component('b-dropdown', BDropdownHeader);
// Vue.component('b-dropdown', BDropdownText);
Vue.component('b-form', BForm);
Vue.component('b-form-checkbox-group', BFormCheckboxGroup);
Vue.component('b-form-checkbox', BFormCheckbox);
Vue.component('b-form-datepicker', BFormDatepicker);
Vue.component('b-form-file', BFormFile);
Vue.component('b-form-group', BFormGroup);
Vue.component('b-form-input', BFormInput);
Vue.component('b-form-radio-group', BFormRadioGroup);
Vue.component('b-form-select', BFormSelect);
// Vue.component('b-form-select', BFormSelectOption);
// Vue.component('b-form-select', BFormSelectOptionGroup);
Vue.component('b-form-spinbutton', BFormSpinbutton);
Vue.component('b-form-textarea', BFormTextarea);
Vue.component('b-form-timepicker', BFormTimepicker);
Vue.component('b-img', BImg);
Vue.component('b-img-lazy', BImgLazy);
Vue.component('b-input-group', BInputGroup);
// Vue.component('b-input-group', BInputGroupAddon);
// Vue.component('b-input-group', BInputGroupAppend);
// Vue.component('b-input-group', BInputGroupPrepend);
// Vue.component('b-input-group', BInputGroupText);
Vue.component('b-modal', BModal);
Vue.component('b-nav', BNav);
// Vue.component('b-nav', BNavForm);
// Vue.component('b-nav', BNavItem);
// Vue.component('b-nav', BNavItemDropdown);
// Vue.component('b-nav', BNavText);
Vue.component('b-navbar', BNavbar);
// Vue.component('b-navbar', BNavbarBrand);
// Vue.component('b-navbar', BNavbarNav);
// Vue.component('b-navbar', BNavbarToggle);
Vue.component('b-pagination', BPagination);
Vue.component('b-pagination-nav', BPaginationNav);
Vue.component('b-progress', BProgress);
Vue.component('b-progress-bar', BProgressBar);
Vue.component('b-spinner', BSpinner);
Vue.component('b-table', BTable);
Vue.component('b-table-lite', BTableLite);
Vue.component('b-table-simple', BTableSimple);
Vue.component('b-tbody', BTbody);
Vue.component('b-thead', BThead);
Vue.component('b-tfoot', BTfoot);
Vue.component('b-tr', BTr);
Vue.component('b-th', BTh);
Vue.component('b-td', BTd);
Vue.component('b-tabs', BTabs);
Vue.component('b-tab', BTab);
Vue.component('b-tooltip', BTooltip);
Vue.component('b-toast', BToast);
Vue.use(BVToastPlugin)
// Vue.component('b-toaster', BToaster);
Vue.component('b-icon', BIcon);
Vue.component('b-popover', BPopover);