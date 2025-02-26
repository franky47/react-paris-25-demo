import type { Album } from '@workspace/db'

type AlbumProps = {
  data: Pick<
    Album,
    'id' | 'name' | 'artist' | 'coverUrl' | 'releaseYear' | 'tracks'
  >
}

export function Album({ data }: AlbumProps) {
  return (
    <figure className="flex flex-col gap-2">
      <img
        src={`/img/albums/${data.id}.jpg`}
        alt={data.name}
        className="aspect-square object-cover rounded-md"
      />
      <figcaption className="">
        <div className="leading-tight mb-1">{data.name}</div>
        <div className="text-sm text-gray-700 dark:text-gray-300">
          {data.artist}
        </div>
        <div className="text-xs text-gray-700 dark:text-gray-300 flex items-center">
          <span>
            {data.releaseYear} • {data.tracks} tracks
          </span>
        </div>
      </figcaption>
    </figure>
  )
}
