import { GoogleSpreadsheet } from "google-spreadsheet";
import config from "../config";

export const doc = new GoogleSpreadsheet(config.server.gSpreadSheetId);