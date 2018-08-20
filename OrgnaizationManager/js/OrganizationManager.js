Vue.component('v-select', VueSelect.VueSelect);
var OrganizationManager = new Vue({
    el:'#OrganizationManager',
    data:{
        componentTypes:[],
        components:[],
        selectedComponentTypeID:'',
        selectedComponent:'',
    },
    /*
    
    
    created(){
        fetch('/DesktopModules/ISAServices/API/Organization/GetOrganizationComponentTypes')
        .then(response => response.json())
        .then(json => {
            this.components = json.OrganizationComponentType
        })
    },
    
            */
    created:function(){
        this.GetOrganizationComponentTypes();
        this.GetOrganizationComponents();
    },
    computed: {
        filteredComponents: function(){
            return this.components.filter(function(component) 
                {return component.componentTypeID === this.selectedComponentTypeID})
        }
    },
    methods:{
        GetOrganizationComponentTypes: function() {
            var self = this;
            axios
            .get('/DesktopModules/ISAServices/API/Organization/GetOrganizationComponentTypes')
             .then(function (response){                 
                self.componentTypes = $.parseJSON(response.data);
             })
             .catch(function (error) {
            })
        },
        GetOrganizationComponents: function() {
            var self = this;
            axios
            .get('/DesktopModules/ISAServices/API/Organization/GetOrganizationComponents')
             .then(function (response){                 
                self.components = $.parseJSON(response.data);
             })
             .catch(function (error) {
             })
        },
        /*
        
        UpdateComponents: function() {
            alert("hello!");
            var self = this;
            self.filteredComponents = self.components.filter(o => o.componentTypeID === self.selectedComponentTypeID)
        },
        FilterComponents: function(){
            this.filteredComponents = 
        }*/
    },
})