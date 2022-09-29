/* ================================================== Path handler ==================================================
    Use to import the file with tthe const variable´s you need in that file
*/
// Import view Parts
import { HeaderView } from '../Individual/View/Component-HeaderView';
import { MainContentView } from '../Individual/View/Component-MainContentView';
import { FooterView } from '../Individual/View/Component-FooterView';


// Import individual Parts
import { InputForm } from '../Individual/Parts/Component-InputForm';
import { Label } from '../Individual/Parts/Component-Label';
import { DropDownList } from '../Individual/Parts/Component-DropDownList.js';

// Import data files
import { dataHeadLinesText } from './Headlines.js';

// Import styling
import { StyleBody } from '../Style/StyleBody';
import { StyleHeadlinesText } from '../Style/StyleHeadlinesText.js';
import { StyleMainContentView } from '../Style/StyleMainContentView';
import { StyleFooterView } from '../Style/StyleFooterView';
// -------------------------------------------------------------------------------
//  Exports Views
export const ExtHeaderView = HeaderView;
export const ExtMainContentView = MainContentView;
export const ExtFooterView = FooterView;

// Exports parts
export const ExtInputForm = InputForm;
export const ExtLabel = Label;
export const ExtDropDownList = DropDownList;

// Exports data file
export const ExtDataHeadLinesText = dataHeadLinesText;

// Exports styling
export const ExtStyleBody = StyleBody;
export const ExtStyleHeadlinesText = StyleHeadlinesText;
export const ExtStyleMainContentView = StyleMainContentView;
export const ExtStyleFooterView = StyleFooterView;