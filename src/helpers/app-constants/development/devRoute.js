export const routes = [

    { name  : "PlayerList", path : "/", exact : false, component : Players},
    { name  : "TeamList", path : "/teams", exact : false, component : Teams},
    { name  : "MatchList", path : "/matches", exact : false, component : Matches},
    { name  : "CourtList", path : "/courts", exact : false, component : Courts},
    { name  : "CourtHostList", path : "/court-hosts", exact : false, component : CourtHosts},
    { name  : "TrainerList", path : "/trainers", exact : false, component : Trainers},
    { name  : "TrainingList", path : "/trainings", exact : false, component : Trainings},
    { name  : "TournamentList", path : "/tournaments", exact : false, component : Tournaments},
    { name  : "AllStarEventList", path : "/all-star-events", exact : false, component : AllStarEvents},
    
];