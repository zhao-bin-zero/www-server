<template>
    <div>
        <b-time v-model="value" v-bind="labels[locale] || {}" :locale="locale" show-seconds @context="onContext"></b-time>
        <pre class="small">{{ context }}</pre>
        <b-breadcrumb
            :items="[
                {
                    text: 'Admin',
                    href: '#',
                },
                {
                    text: 'Manage',
                    href: '#',
                },
                {
                    text: 'Library',
                    active: true,
                },
            ]"
        ></b-breadcrumb>
        <b-calendar v-model="value" @context="onContext" locale="en-US"></b-calendar>
        <b-dropdown id="dropdown-1" text="Dropdown Button" class="m-md-2">
            <!-- <div>
                <b-button v-b-toggle.collapse-1 variant="primary">Toggle Collapse</b-button>
                <b-collapse id="collapse-1" class="mt-2">
                    <b-card>
                        <p class="card-text">Collapse contents Here</p>
                        <b-button v-b-toggle.collapse-1-inner size="sm">Toggle Inner Collapse</b-button>
                        <b-collapse id="collapse-1-inner" class="mt-2">
                            <b-card>Hello!</b-card>
                        </b-collapse>
                    </b-card>
                </b-collapse>
            </div> -->
            <b-dropdown-item>First Action</b-dropdown-item>
            <b-dropdown-item>Second Action</b-dropdown-item>
            <b-dropdown-item>Third Action</b-dropdown-item>
            <b-dropdown-divider></b-dropdown-divider>
            <b-dropdown-item active>Active action</b-dropdown-item>
            <b-dropdown-item disabled>Disabled action</b-dropdown-item>
        </b-dropdown>
        <b-form @submit="onSubmit" @reset="onReset" v-if="show">
            <b-form-group id="input-group-1" label="Email address:" label-for="input-1" description="We'll never share your email with anyone else.">
                <b-form-input id="input-1" v-model="form.email" type="email" required placeholder="Enter email"></b-form-input>
            </b-form-group>

            <b-form-group id="input-group-2" label="Your Name:" label-for="input-2">
                <b-form-input id="input-2" v-model="form.name" required placeholder="Enter name"></b-form-input>
            </b-form-group>

            <b-form-group id="input-group-3" label="Food:" label-for="input-3">
                <b-form-select id="input-3" v-model="form.food" :options="foods" required></b-form-select>
            </b-form-group>

            <b-form-group id="input-group-4">
                <b-form-checkbox-group v-model="form.checked" id="checkboxes-4">
                    <b-form-checkbox value="me">Check me out</b-form-checkbox>
                    <b-form-checkbox value="that">Check that out</b-form-checkbox>
                </b-form-checkbox-group>
            </b-form-group>

            <b-button type="submit" variant="primary">Submit</b-button>
            <b-button type="reset" variant="danger">Reset</b-button>
        </b-form>
        <b-form-timepicker id="datepicker-invalid" :state="false" class="mb-2"></b-form-timepicker>
        <b-card class="mt-3" header="Form Data Result">
            <pre class="m-0">{{ form }}</pre>
        </b-card>

        <!-- <b-button v-b-modal.modal-center>Launch centered modal</b-button> -->

        <b-modal id="modal-center" centered title="BootstrapVue">
            <p class="my-4">Vertically centered modal!</p>
        </b-modal>

        <b-table-simple hover small caption-top responsive>
            <caption>
                Items sold in August, grouped by Country and City:
            </caption>
            <colgroup>
                <col />
                <col />
            </colgroup>
            <colgroup>
                <col />
                <col />
                <col />
            </colgroup>
            <colgroup>
                <col />
                <col />
            </colgroup>
            <b-thead head-variant="dark">
                <b-tr>
                    <b-th colspan="2">Region</b-th>
                    <b-th colspan="3">Clothes</b-th>
                    <b-th colspan="2">Accessories</b-th>
                </b-tr>
                <b-tr>
                    <b-th>Country</b-th>
                    <b-th>City</b-th>
                    <b-th>Trousers</b-th>
                    <b-th>Skirts</b-th>
                    <b-th>Dresses</b-th>
                    <b-th>Bracelets</b-th>
                    <b-th>Rings</b-th>
                </b-tr>
            </b-thead>
            <b-tbody>
                <b-tr>
                    <b-th rowspan="3">Belgium</b-th>
                    <b-th class="text-right">Antwerp</b-th>
                    <b-td>56</b-td>
                    <b-td>22</b-td>
                    <b-td>43</b-td>
                    <b-td variant="success">72</b-td>
                    <b-td>23</b-td>
                </b-tr>
                <b-tr>
                    <b-th class="text-right">Gent</b-th>
                    <b-td>46</b-td>
                    <b-td variant="warning">18</b-td>
                    <b-td>50</b-td>
                    <b-td>61</b-td>
                    <b-td variant="danger">15</b-td>
                </b-tr>
                <b-tr>
                    <b-th class="text-right">Brussels</b-th>
                    <b-td>51</b-td>
                    <b-td>27</b-td>
                    <b-td>38</b-td>
                    <b-td>69</b-td>
                    <b-td>28</b-td>
                </b-tr>
                <b-tr>
                    <b-th rowspan="2">The Netherlands</b-th>
                    <b-th class="text-right">Amsterdam</b-th>
                    <b-td variant="success">89</b-td>
                    <b-td>34</b-td>
                    <b-td>69</b-td>
                    <b-td>85</b-td>
                    <b-td>38</b-td>
                </b-tr>
                <b-tr>
                    <b-th class="text-right">Utrecht</b-th>
                    <b-td>80</b-td>
                    <b-td variant="danger">12</b-td>
                    <b-td>43</b-td>
                    <b-td>36</b-td>
                    <b-td variant="warning">19</b-td>
                </b-tr>
            </b-tbody>
            <b-tfoot>
                <b-tr>
                    <b-td colspan="7" variant="secondary" class="text-right"> Total Rows: <b>5</b> </b-td>
                </b-tr>
            </b-tfoot>
        </b-table-simple>
        <b-tabs content-class="mt-3">
            <b-tab title="First" active><p>I'm the first tab</p></b-tab>
            <b-tab title="Second"><p>I'm the second tab</p></b-tab>
            <b-tab title="Disabled" disabled><p>I'm a disabled tab!</p></b-tab>
        </b-tabs>
        <b-button id="link-button" href="#" tabindex="0"> Link button with tooltip component </b-button>
        <div class="p-3 bg-secondary progress-bar-striped" style="min-height: 170px">
            <b-button class="mb-2" variant="primary" @click="$bvToast.show('example-toast')"> Show toast </b-button>
            <b-toast id="example-toast" title="BootstrapVue" static no-auto-hide> Hello, world! This is a toast message. </b-toast>
        </div>
        <div style="font-size: 4rem">
            <b-icon icon="camera"></b-icon>
            <b-icon icon="camera" rotate="45"></b-icon>
            <b-icon icon="camera" rotate="90"></b-icon>
            <b-icon icon="camera" rotate="180"></b-icon>
            <b-icon icon="camera" rotate="270"></b-icon>
            <b-icon icon="camera" rotate="-45"></b-icon>
        </div>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name: 'page',
    data() {
        return {
            value: '',
            locale: 'de',
            context: null,
            labels: {
                de: {
                    labelHours: 'Stunden',
                    labelMinutes: 'Minuten',
                    labelSeconds: 'Sekunden',
                    labelIncrement: 'Erhöhen',
                    labelDecrement: 'Verringern',
                    labelSelected: 'Ausgewählte Zeit',
                    labelNoTimeSelected: 'Keine Zeit ausgewählt',
                },
            },
            form: {
                email: '',
                name: '',
                food: null,
                checked: [],
            },
            foods: [{ text: 'Select One', value: null }, 'Carrots', 'Beans', 'Tomatoes', 'Corn'],
            show: true,
        };
    },
    metaInfo() {
        // https://github.com/nuxt/vue-meta/blob/master/src/shared/constants.js
        return {
            title: 'TigerWit',
            meta: [
                { vmid: 'keywords', name: 'keywords', content: 'page' },
                { vmid: 'description', name: 'description', content: 'page' },
            ],
            htmlAttrs: {
                lang: 'en',
            },
        };
    },
    methods: {
        onContext(ctx) {
            this.context = ctx;
        },
        onSubmit(evt) {
            evt.preventDefault();
            alert(JSON.stringify(this.form));
        },
        onReset(evt) {
            evt.preventDefault();
            // Reset our form values
            this.form.email = '';
            this.form.name = '';
            this.form.food = null;
            this.form.checked = [];
            // Trick to reset/clear native browser form validation state
            this.show = false;
            this.$nextTick(() => {
                this.show = true;
            });
        },
    },
    components: {},
    computed: {},
};
</script>

