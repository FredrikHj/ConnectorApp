/* ================================================== Path handler ==================================================
    Use to import the file with tthe const variable´s you need in that file
*/
//import { AxiosGet } from './Axios';

// Import view Parts
import { HeaderView } from '../Components/Component-HeaderView';

// Import data files
import { BudgetBalancedOverView } from '../pages/Compilation';
import { TableHead } from '../Components/Component-CompilationTableHead';
import { TableBodyView } from '../Components/Component-CompilationTableBody';
import { TransactionsView } from '../pages/Transactions';

import { FooterView } from '../Components/Component-FooterView';

// Import styling
import { StyleBodyContainer } from '../styles/StyleBody';
import { StyleHeader } from '../styles/StyleHeader';
import { StyleCompilationView } from '../styles/StyleCompilationView';
import { StyleTransactionView } from '../styles/StyleTransactionView';
import { StyleFooterView } from '../styles/StyleFooterView';

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
//export const ExtAxiosGet = AxiosGet;

// Exports styles
export const ExtStyleBody = StyleBodyContainer;
export const ExtStyleHeader = StyleHeader;
export const ExtStyleCompilationView = StyleCompilationView;
export const ExtStyleTransactionView = StyleTransactionView;
export const ExtStyleFooterView = StyleFooterView;
