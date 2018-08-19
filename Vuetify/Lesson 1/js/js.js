new Vue(
{
    el: '#simpleApp',
    data: {
      apiData: undefined,
      dialog: false,
      headers: [
        { text: 'Player', align: 'left', value: 'name' },
        { text: 'Age', value: 'age' },
        { text: 'Nationality', value: 'nationality' },
        { text: 'Club', value: 'club_logo'},
        { text: 'Overall', value: 'overall' }
      ],
      clearSelectedPlayer:{
        pas: '',
        name: '',
        club: '',
        photo: '',
        age: '',
        club_logo: '',
        overall: '',
        dri: '',
        phy: '',
        pac: '',
        nationality: '',
        def: '',
        sho: ''
      },
      selectedCountry: undefined,
      selectedPlayer:{
        pas: '',
        name: '',
        club: '',
        photo: '',
        age: '',
        club_logo: '',
        overall: '',
        dri: '',
        phy: '',
        pac: '',
        nationality: '',
        def: '',
        sho: ''
      },
      subHeaders: [
          { text: 'Passing', align: 'left', value: 'pas'},
          { text: 'Dribbling', align: 'left', value: 'dri'},
          { text: 'Physicality', align: 'left', value: 'phy'},
          { text: 'Pace', align: 'left', value: 'pac'},
          { text: 'Defense', align: 'left', value: 'def'},
          { text: 'Shooting', align: 'left', value: 'sho'},
      ]
    },
    methods:{
        closeDetails: function(){
            this.dialog = false;
            this.selectedPlayer = Object.assign({}, this.clearSelectedPlayer)
        },
        loadApi: function(){
            self = this;
            axios.get('data/data.json')
                .then(function (response){
                    self.apiData = response.data;
                    console.log(self.apiData);
                })
                .catch(function (error){
                    console.log(error);
                })
        },
        selectionChanged: function(){
            console.log(this.selectedCountry)
        },
        selectPlayer: function(player){
            this.selectedPlayer = Object.assign({},player);
            this.dialog = true;
            drawChart();
        }
    }
}
);