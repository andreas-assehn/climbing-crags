import { gradesObj } from './grades';
const grades = gradesObj();

type returnType = {
  routes: string;
  rating: string;
  difficulties: string;
};

export function calcRoutesAndDifficulty(item: any, type: string): returnType {
  let numberOfRoutes = 0;
  let rating = 0;

  const hasItemAndType = item && (type === 'crags' || type === 'sectors');

  if (hasItemAndType) {
    if (type === 'crags') {
      let difficulties: Difficulty = { high: 0, low: 1000 };
      item.sectors.forEach((sector: Sector) => {
        let sectorDifficulties = sector.routes.reduce(
          (prev, curr) => {
            const gradeId = parseInt(curr.grade_id);
            if (prev.high < gradeId) {
              prev.high = gradeId;
            }
            if (prev.low > gradeId) {
              prev.low = gradeId;
            }
            return prev;
          },
          { high: 0, low: 1000 }
        );
        if (!difficulties) {
          difficulties = { ...sectorDifficulties };
        } else {
          difficulties = {
            high: Math.max(difficulties.high, sectorDifficulties.high),
            low: Math.min(difficulties.low, sectorDifficulties.low),
          };
        }
        sector.routes.forEach((route) => {
          numberOfRoutes++;
          rating += parseInt(route.rating);
        });
      });
      return {
        routes: item.sectors.length,
        rating: (rating / numberOfRoutes).toFixed(1),
        difficulties: stringifyDifficulties(difficulties),
      };
    }
    if (type === 'sectors') {
      let sectorDifficulties = item.routes.reduce(
        (prev: Difficulty, curr: Route) => {
          const current = parseInt(curr.grade_id);
          if (prev.high < current) {
            prev.high = current;
          }
          if (prev.low > current) {
            prev.low = current;
          }
          return prev;
        },
        { high: 0, low: 1000 }
      );
      item.routes.forEach((route: Route) => {
        numberOfRoutes++;
        rating += parseInt(route.rating);
      });
      return {
        routes: item.routes.length + '+',
        rating: (rating / numberOfRoutes).toFixed(1),
        difficulties: stringifyDifficulties(sectorDifficulties),
      };
    }
  }
  return {
    routes: '',
    rating: '',
    difficulties: '',
  };
}

function stringifyDifficulties(difficulties: Difficulty) {
  return `${getFrGrade(difficulties.low)} - ${getFrGrade(difficulties.high)}`;
}

export function getFrGrade(grade: number) {
  return grades[grade][0];
}
