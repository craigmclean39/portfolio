interface FilterOption {
  propertyName: string;
  propertyValues: string[];
}

export const geoJsonFilter = (data: any, filterOptions: FilterOption[]) => {
  const filteredFeatures: any = [];

  filterOptions.forEach((option) => {
    data.features.forEach((feature: any) => {
      option.propertyValues.forEach((propValue) => {
        if (feature.properties[option.propertyName] === propValue) {
          filteredFeatures.push(feature);
        }
      });
    });
  });

  console.log(filteredFeatures);
  return filteredFeatures;
};
