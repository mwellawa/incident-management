using {sap.capire.incidents as my} from '../db/schema';

service AdminService {
  entity Customers as projection on my.Customers;
}

annotate AdminService.Customers with @odata.draft.enabled;
annotate AdminService with @(requires: 'admin');
