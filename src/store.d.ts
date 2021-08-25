import UserSliceState from "./store/reducers/user/userSliceState";
import CatSliceState from "./store/reducers/cat/catSliceState";

interface Store {
  user: UserSliceState;
  cats: CatSliceState;
}

export default Store;
