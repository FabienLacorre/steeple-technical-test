import moment from 'moment'

export const FORMAT_DATE = 'DD/MM/YYYY'

export const formatDisplayDate = (date: Date | string) => {
  return moment(date).format(FORMAT_DATE)
}
