/* ================================================== Override for Header ==================================================
Imports module */
let dimension = {
    witdh: 1900,
    height: 90
};
export let StyleHeader = {
    ContentContainer: {
        height: `${dimension.height*0.06}`, 
        width: 2500,
        /*backgroundColor: "red",  For browsers that do not support gradients
        backgroundImage: "linear-gradient(to right, red, yellow)"*/
        border: '1px solid red',
        display: "flex",
        displayDirection: "row",
        justifyContent: "space-between",
    },
    AppName: {
        width: 1000,
        fontSize: 30,
        textAlign: 'center'
    },
    HeadEmptySpace: {
        width: 1000,
    },
    NavButtonsGrid: {
        border: '1px solid red',
        width: 2600,
        display: "flex",
        displayDirection: "row",
        justifyContent: "space-between",
    },
    NavButtons: {
        border: '1px solid red',
        width: 250,
        fontSize: 15
    }
}