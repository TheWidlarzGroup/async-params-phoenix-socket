# Async params wrapper for Phoenix Socket

If you are using the Phoenix and Absinthe library in your JS codebase to instantiate the graphql websocket connection, you may stumble across the problem of setting the params with a function returning a Promise. To resolve the problem, you can use these socket.ts/socket.js files.

The rest of the setup should go [like this](https://hexdocs.pm/absinthe/apollo.html#using-a-websocket-link)

Instead of importing

```
import { Socket as PhoenixSocket } from "phoenix";
```

just import your custom implementation from `socket.ts` / `socket.js`:

```
import PhoenixSocket from "../path/socket";
```

and you should be done 😀

Happy coding 🔥
