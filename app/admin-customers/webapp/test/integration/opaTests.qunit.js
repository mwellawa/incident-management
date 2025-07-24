sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'ns/admin/customer/admincustomers/test/integration/FirstJourney',
		'ns/admin/customer/admincustomers/test/integration/pages/CustomersList',
		'ns/admin/customer/admincustomers/test/integration/pages/CustomersObjectPage'
    ],
    function(JourneyRunner, opaJourney, CustomersList, CustomersObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('ns/admin/customer/admincustomers') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheCustomersList: CustomersList,
					onTheCustomersObjectPage: CustomersObjectPage
                }
            },
            opaJourney.run
        );
    }
);