export default function({ app, route, redirect, res }) {
  const user = res.locals.user;
  if (route.path !== "/login") {
    if (!user) {
      return redirect("/login");
    } else {
    }
  } else if (route.path === "/login") {
    if (!user) {
    } else {
      return redirect("/");
    }
  }
}
