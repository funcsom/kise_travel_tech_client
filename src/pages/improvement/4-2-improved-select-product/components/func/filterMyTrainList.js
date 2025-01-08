// Train List에서 departStation, arrivalStation을 props로 받아서, departStation, arrivalStation에 따른 myTrainList를 필터링하는 함수
export const filterMyTrainList = (data, departStation, arrivalStation) => {
  const filterTrains = data.filter((item) => {
    const stationNames = item.stations.map((i) => i.station);
    return (
      stationNames.includes(departStation) &&
      stationNames.includes(arrivalStation)
    );
  });

  const realconfirmTrainList = filterTrains.filter((item) => {
    const departIndex = item.stations.findIndex(
      (i) => i.station === departStation
    );
    const arrivalIndex = item.stations.findIndex(
      (i) => i.station === arrivalStation
    );
    return departIndex < arrivalIndex;
  });

  // 🔥 departStation과 arrivalStation만 남기기
  const trimmedTrainList = realconfirmTrainList.map((item) => {
    const filteredStations = item.stations.filter(
      (station) =>
        station.station === departStation || station.station === arrivalStation
    );

    // 객체 item 반환
    return {
      ...item,
      stations: filteredStations,
    };
  });

  return trimmedTrainList;
};
