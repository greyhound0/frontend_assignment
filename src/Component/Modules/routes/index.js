import UserProfile from "../../Pages/userProfile";
import Posts from "../../Pages/Posts";
import Gallery from "../../Pages/Gallery";
import ToDo from "../../Pages/ToDo";

export const routes = [
  { name: "Profile", route: "/profile", component: UserProfile },
  { name: "Posts", route: "/posts", component: Posts },
  { name: "Gallery", route: "/gallery", component: Gallery },
  { name: "ToDo", route: "/toDo", component: ToDo },
];
