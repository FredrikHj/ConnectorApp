/* ================================================== Override for Header ==================================================
Imports module */
let dimension = {
    witdh: 2000,
    height: 90
};
let fontSizeAppname = 30;
let fontSizeNavButtons = 17;

export let StyleHeader = {
    Container: {
        display: "flex",
        displayDirection: "row",
        justifyContent: "space-between",
        width: "100%",
        /*backgroundColor: "red",  For browsers that do not support gradients
        backgroundImage: "linear-gradient(to right, red, yellow)"*/
        
    },
    ContentContainer: {
        height: `${dimension.height*0.06}`, 
        /*backgroundColor: "red",  For browsers that do not support gradients
        backgroundImage: "linear-gradient(to right, red, yellow)"*/
        display: "flex",
        displayDirection: "row",
        justifyContent: "space-between",
    },
    AppName: {
        width: 300,
        fontSize: fontSizeAppname,
        textAlign: 'center',
    },
    NavButtonsGrid: {
        minWidth: 0,
        width: 900,
        display: "flex",
        displayDirection: "row",
        justifyContent: "space-between",
    },
    NavButtons: {
        width: 300,
        fontSize: fontSizeNavButtons
    }
}