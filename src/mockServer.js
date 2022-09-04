import { createServer } from "miragejs"

export const startMockServer = () => {
  createServer({
    routes() {
      this.namespace = "api";

      this.get("/components", () => {
        return components;
      });
    },
  });
};

const components = [
  { id: 2, name: "/DP300-STRU-AKO", parent: 1 },
  {
    id: 3,
    name: "/DP300-STRU-MS-WELDEDNODE-AKO",
    parent: 2,
  },
  {
    id: 4,
    name: "/DP300-STRU-MS-BULKHEAD-AKO",
    parent: 2,
  },
  {
    id: 5,
    name: "/DP300-STRU-MS-DECKFRAMING-AKO",
    parent: 2,
  },
  {
    id: 6,
    name: "/DP300-STRU-MS-TRUSS-AKO",
    parent: 2,
  },
  {
    id: 7,
    name: "/DP300-STRU-OS-ACCMAINPLFGT10-AKO",
    parent: 2,
  },
  {
    id: 8,
    name: "/DP300-STRU-OS-EXTDECKAREA-AKO",
    parent: 2,
  },
  {
    id: 9,
    name: "/DP300-STRU-SS-DECKSTRUCT-AKO",
    parent: 2,
  },
  { id: 1, name: "NOA-PDQ" },
  {
    id: 10,
    name: "STRUCTURE 4 of ZONE /DP300-STRU-MS-WELDEDNODE-AKO",
    parent: 3,
  },
  {
    id: 11,
    name: "STRUCTURE 2 of ZONE /DP300-STRU-MS-WELDEDNODE-AKO",
    parent: 3,
  },
  {
    id: 12,
    name: "STRUCTURE 1 of ZONE /DP300-STRU-MS-WELDEDNODE-AKO",
    parent: 3,
  },
  {
    id: 13,
    name: "STRUCTURE 3 of ZONE /DP300-STRU-MS-WELDEDNODE-AKO",
    parent: 3,
  },
  {
    id: 14,
    name: "STRUCTURE 5 of ZONE /DP300-STRU-MS-WELDEDNODE-AKO",
    parent: 3,
  },
  { id: 15, name: "/DP300-STRU-AKO/TRU/T500", parent: 6 },
  { id: 16, name: "/DP300-STRU-AKO/TRU/T400", parent: 6 },
  { id: 17, name: "/DP300-STRU-AKO/TRU/L200", parent: 6 },
  { id: 18, name: "/DP300-STRU-AKO/TRU/L100", parent: 6 },
  { id: 19, name: "/DP300-STRU-AKO/DFR/LOWER_DK", parent: 5 },
  { id: 20, name: "/DP300/EA/APG/APG02", parent: 7 },
  { id: 21, name: "/DP300/EA/PLF01", parent: 7 },
  { id: 22, name: "/DRAWING-90601", parent: 3 },
  { id: 23, name: "/DP300-STRU-AKO/EDA/LOWER_DK", parent: 8 },
  { id: 24, name: "/DP300-STRU-AKO/BHD/LOWER_DK_T500", parent: 4 },
  { id: 25, name: "/DP300-STRU-AKO/DST/LOWER_DK", parent: 9 },
];