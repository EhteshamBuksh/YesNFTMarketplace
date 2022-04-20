export const initialState = {
    wallet: null,
    create: null,
};

const Reducer = (state, action) => {
    console.log(action);
    switch(action.type){
        case 'ADD_WALLET':
            return {
                ...state,
                wallet: {
                    id: action.item.id,
                    address: action.item.address,
                    icons: action.item.icons,
                },
            };
            case 'CREATE_NFT':
                return {
                    ...state,
                    create:{
                        id: action.item.signer,
                        txt: action.item.tx,
                        image:action.item.uploadedImage,

                    }
                }
    default:
        return state;

    }
};

export default Reducer;