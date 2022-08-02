import moment from "moment"
export const emptyImageFilter = {
  filters: {
    emptyImage (src) {
      return src || 'https://via.placeholder.com/350x220/DFDFDF?text=No+Image'
    }
  }
}

export const fromNowFilter = {
  filters: {
    fromNow (datetime) {
      return datetime ? moment(datetime).fromNow() : '-'
    }
  }
}