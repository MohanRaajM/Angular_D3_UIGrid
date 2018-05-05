myApp.controller('testController', ['$scope', function ($scope) {
	$scope.radioption = 'grid';
  $scope.gridOptions = {
      columnDefs: [
      { name: 'animals', displayName:'', width: '35%',
    enableColumnMenu: false},
        { displayName: 'Range 0-1', width:'20%',name:'Range 0 - 1',
    enableColumnMenu: false },
		{ displayName: 'Range 1-2', width:'20%',
    enableColumnMenu: false,name:'Range 1 - 2' },
		{ displayName: 'Range 2-3', width:'20%',
    enableColumnMenu: false,name:'Range 2 - 3' },
		{ displayName: 'Range 3-4', width:'20%',
    enableColumnMenu: false,name:'Range 3 - 4' },
		{ displayName: 'Range 4-5', width:'20%',
    enableColumnMenu: false,name:'Range 4 - 5' },
		{ displayName: 'Range 5-6', width:'20%',
    enableColumnMenu: false,name:'Range 5 - 6' },
		{ displayName: 'Range 6-7', width:'20%',
    enableColumnMenu: false,name:'Range 6 - 7' },
		{ displayName: 'Range 7-8', width:'20%',
    enableColumnMenu: false,name:'Range 7 - 8' },
		{ displayName: 'Range 8-9', width:'20%',
    enableColumnMenu: false,name:'Range 8 - 9' },
		{ displayName: 'Range 9-10', width: '30%',
    enableColumnMenu: false,name:'Range 9 - 0' },
      ],
      onRegisterApi: function( gridApi ) {
        $scope.gridApi = gridApi;
      }
  };
  // Sample data to populate our grid
  $scope.gridOptions.data = [
{
		"Range 0 - 1":50,
		"Range 1 - 2":120,
		"Range 2 - 3":30,
		"Range 3 - 4": 6 ,
		"Range 4 - 5":0,
		"Range 5 - 6":80,
		"Range 6 - 7":40,
		"Range 7 - 8":33,
		"Range 8 - 9":22,
		"Range 9 - 0":1000,
		"animals":"Tigers"
	},
	{
			"Range 0 - 1":50,
			"Range 1 - 2":120,
			"Range 2 - 3":30,
			"Range 3 - 4":6,
			"Range 4 - 5":0,
			"Range 5 - 6":80,
			"Range 6 - 7":40,
			"Range 7 - 8":33,
			"Range 8 - 9":22,
			"Range 9 - 0":100,
			"animals":"Lions"
	},
	{
			"Range 0 - 1":50,
			"Range 1 - 2":120,
			"Range 2 - 3":30,
			"Range 3 - 4":6,
			"Range 4 - 5":0,
			"Range 5 - 6":80,
			"Range 6 - 7":40,
			"Range 7 - 8":33,
			"Range 8 - 9":22,
			"Range 9 - 0":24,
			"animals":"Zebras"
	},
	{
			"Range 0 - 1":50,
			"Range 1 - 2":120,
			"Range 2 - 3":30,
			"Range 3 - 4": 6,
			"Range 4 - 5":0,
			"Range 5 - 6":80,
			"Range 6 - 7":40,
			"Range 7 - 8":33,
			"Range 8 - 9":22,
			"Range 9 - 0":28,
			"animals":"Python"
	}
];
}]);
