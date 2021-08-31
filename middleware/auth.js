export default function({ app, route, redirect, res }) {
  if(res) {
    const user = res.locals.user;
  console.log(res.locals);
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
}
