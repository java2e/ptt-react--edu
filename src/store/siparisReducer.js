import { createStore } from "redux";

const initState = {
  menuList: [],
  icecekList: [],
  siparisList: [],
};

const siparisReducer = (state = initState, action) => {
  debugger;
  if (action.type === "SIPARIS_EKLE") {
    const list = state.siparisList;

    const yeniListe = [...list, action.data.siparis];

    return {
      siparisList: yeniListe,
    };
  } else if (action.type === "SIPARIS_SIL") {
    const liste = state.siparisList;

    const yeniListe = liste.filter((siparis) => siparis.id !== action.data.id);

    return {
      siparisList: yeniListe,
    };
  } else if (action.type === "SIPARIS_DUZENLE") {
    debugger;
    const liste = state.siparisList;
    // DATA => MENU ID , SİPARİS ID
    if (action.data.listeTipi === "MENU") {
      const result = liste.filter(
        (siparis) =>
          siparis.id === action.data.siparisId &&
          siparis.menu.id === action.data.menuId
      );
      if (result.length > 0) {
        const siparis = result[0];

        const menu = siparis.menu;
        if (action.data.islem === "CIKAR") menu.adet = menu.adet - 1;
        else if (action.data.islem === "EKLE") menu.adet = menu.adet + 1;
        siparis.menu = menu;

        const sonListe = liste.map((sip) => {
          if (siparis.id === sip.id) {
            return siparis;
          }
          return sip;
        });

        return {
          siparisList: sonListe,
        };
      }
    }
  } else if (action.type === "MENU_LOAD") {
    return {
      menuList: action.data.menuList,
    };
  } else if (action.type === "ICECEK_LOAD") {
    return {
      icecekList: action.data.icecekList,
    };
  }

  return state;
};

const store = createStore(siparisReducer);

export default store;
