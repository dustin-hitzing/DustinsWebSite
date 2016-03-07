namespace DustinPortfolio.Controllers {
    export class LandingPageController {
        public items;
        constructor(private $http: ng.IHttpService) {
            $http.get('/api/work')
                .then((response) => {
                    this.items = response.data;
                });
        }
    }
}