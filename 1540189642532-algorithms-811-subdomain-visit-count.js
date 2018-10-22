/**
 * @param {string[]} cpdomains
 * @return {string[]}
 */

const createDomainMapHelper = (count, sections, result) => {
  if (sections.length <= 0) {
    return result;
  }
  result[sections.join('.')] = count;
  return createDomainMapHelper(count, sections.slice(1, sections.length), result);
};

const createDomainMap = (str) => {
  const [count, domain] = str.split(' ');
  const sections = domain.split('.');
  return createDomainMapHelper(parseInt(count, 10), sections, {});
};

const subdomainVisits = (countPairDomains) => { // eslint-disable-line
  const resultsMap = countPairDomains.reduce(
    (result, domain) => {
      const domainVisitCountMap = createDomainMap(domain);
      Object.keys(domainVisitCountMap).forEach((key) => {
        if (result[key]) {
          result[key] += domainVisitCountMap[key];
        } else {
          result[key] = domainVisitCountMap[key];
        }
      });
      return result;
    },
    {},
  );
  return Object.keys(resultsMap).map(key => `${resultsMap[key]} ${key}`);
};
