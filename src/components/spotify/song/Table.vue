<template>
  <table
    v-if="tracks"
    class="table mt-5"
  >
    <thead>
      <tr>
        <th scope="col" />
        <th scope="col" />
        <th scope="col">
          Titel
        </th>
        <th scope="col">
          Künstler*in
        </th>
        <th
          scope="col"
        >
          Album
        </th>
      </tr>
    </thead>
    <tbody>
      <spotify-song-table-row
        v-for="track in tracks"
        :key="track.id"
        :track="track"
      />
    </tbody>
  </table>
</template>

<script>
import SpotifySongTableRow from '@/components/spotify/song/TableRow'

export default {
  name: 'SpotifySongTable',
  components: { SpotifySongTableRow },
  props: {
    tracks: {
      type: Array,
      required: true
    }
  }
}
</script>
