import { CartIcon, WishListIcon } from "../icons";
const NavLinksData = [
  { text: "Home", link: "/" },
  { text: "Shop Now", link: "/shop" },
  { text: "About", link: "/about" },
  { text: "Contact", link: "/contact" },
];
const NavActionsData = [
  { text: "Cart", link: "/cart", icon: <CartIcon /> },
  { text: "WishList", link: "/wishlist", icon: <WishListIcon /> },
];
export { NavLinksData, NavActionsData };
