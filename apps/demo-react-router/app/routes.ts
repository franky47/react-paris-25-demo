import { type RouteConfig, route } from '@react-router/dev/routes'

export default [
  route('/', './routes/index.tsx'),
  route('/albums', './routes/albums.tsx'),
] satisfies RouteConfig
