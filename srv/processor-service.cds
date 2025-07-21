using {sap.capire.incidents as my} from '../db/schema';

service ProcessorService {
  entity Incidents as projection on my.Incidents;
  annotate my.Customers with @cds.autoexpose;
}

annotate ProcessorService.Incidents with @odata.draft.enabled;
annotate ProcessorService with @(requires: 'support');
