/* ================================================== Path handler ==================================================
    Use to import the file with tthe const variable´s you need in that file
    */
// Import view Parts
import { HeaderView } from '../Individual/Views/Component-HeaderView';


// Import data files
import { BudgetBalancedOverView } from '../Individual/Views/Component-BudgetCompillationView';
import { TableHead } from '../Individual/Views/Component-CompilationTableHead';
import { TableBodyView } from '../Individual/Views/Component-CompilationTableBody';
import { TransactionsView } from '../Individual/Views/Component-TransactionsView';

import { FooterView } from '../Individual/Views/Component-FooterView';


// Import styling
import { StyleBodyContainer } from '../Style/StyleBody';
import { StyleHeader } from '../Style/StyleHeader.js';
import { StyleMainContentView } from '../Style/StyleMainContentView';
import { StyleFooterView } from '../Style/StyleFooterView';
/*
import { CategorieHandlerView } from '../Individual/View/Component-CategorieHandlerView';


// Import individual Parts
import { InputForm } from '../Individual/Parts/Component-InputForm';
import { Label } from '../Individual/Parts/Component-Label';
import { DropDownList } from '../Individual/Parts/Component-DropDownList.js';
*/
// -------------------------------------------------------------------------------
//  Exports Views
export const ExtHeaderView = HeaderView;
export const ExtBudgetBalancedOverView = BudgetBalancedOverView;
export const ExtTableHead = TableHead;
export const ExtTableBodyView = TableBodyView;
export const ExtTransactionsView = TransactionsView;

export const ExtFooterView = FooterView;

/*
export const ExtCategorieHandlerView = CategorieHandlerView;

// Exports parts
export const ExtInputForm = InputForm;
export const ExtLabel = Label;
export const ExtDropDownList = DropDownList;

*/
// Exports data file

export const ExtStyleBody = StyleBodyContainer;
export const ExtStyleHeader = StyleHeader;
export const ExtStyleMainContentView = StyleMainContentView;
export const ExtStyleFooterView = StyleFooterView;
