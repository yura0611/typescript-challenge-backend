export interface TransitStop {
  name: string
  id: string
  lat: number
  lineId?: string
  lng: number
  prevId: string
  nextId: string
  peopleOn: number
  peopleOff: number
  reachablePopulationWalk: number
  reachablePopulationBike: number
}

export interface TransitLine {
  id: string
  stops: TransitStop[]
}
