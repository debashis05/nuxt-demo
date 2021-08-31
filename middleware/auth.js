export default function({ app, route, redirect, res }) {
  console.log(res.locals);
const user = res.locals.user;
  if (route.path !== "/login") {
    if (!user) {
      console.log(user);
      return redirect("/login");
    } else {
      console.log(user);
    }
  } else if (route.path === "/login") {
    if (!user) {
    } else {
      return redirect("/");
    }
  }
}
