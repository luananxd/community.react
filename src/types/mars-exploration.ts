type MarsCamera = 'FHAZ' | 'RHAZ' | 'MAST' | 'CHEMCAM' | 'MAHLI'

export interface MarsWeatherFilter {
  version: '1.0'
  feedtype: 'json'
  apiKey: string
}

export interface MarsPhotosFilter {
  sol: number
  camera: MarsCamera
  page: number
  apiKey: string
}

export interface MarsRoverPhoto {
  id: number
  sol: number
  camera: {
    id: number
    name: MarsCamera
    rover_id: number
    full_name: string
  }
  imgSrc: string
  earthDate: string
  rover: {
    id: number
    name: string
    landingDate: string
    launchDate: string
    status: string
  }
}
