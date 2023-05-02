const books = [
    {
      id:1,
      title: "How to win friends and influence people",
      authors: ["Dale Carnegie"],
      publisher: "Pocket Books",
      year: "1936",
    },
    {
        id:2,
      title: "Management: tasks, responsibilities, practices",
      authors: ["Peter F. Drucker"],
      publisher: "Harper Business",
      year: "1985",
    },
    {
        id:3,
      title: "Strength finder 2.0",
      authors: ["Tom Rath"],
      publisher: "Gallup Press",
      year: "2007",
    },
    {
        id:4,
      title: "In search of excellence: Lessons from America's best-run companies",
      authors: ["Thomas Peters", " Robert H. Waterman"],
      publisher: "Harper Collins",
      year: "1982",
    },
    {
        id:5,
      title: "Built to last: Successful habits of visionary companies",
      authors: ["James C. Collins", "Jerry I. Porras"],
      publisher: "Harper Collins",
      year: "1994",
    },
    {
        id:6,
      title: "Reengineering the corporation: A manifesto for business revolution",
      authors: ["Michael Hammer", "James A. Champy"],
      publisher: "Harper Collins",
      year: "1993",
    },
    {
        id:7,
      title:
        "Competitive advantage: Creating and sustaining superior performance",
      authors: ["Michael E. Porter"],
      publisher: "Free Press",
      year: "1998",
    },
    {
        id:8,
      title:
        "Crossing the chasm: Marketing and selling technology products to mainstream customers",
      authors: ["Geoffrey A. Moore", "Regis McKenna"],
      publisher: "Pocket Books",
      year: "1936",
    },
    {
        id:9,
      title:
        "7 habits of highly effective people: Powerful lessons in personal change",
      authors: ["Stephen R. Covey"],
      publisher: "Simon and Shuster",
      year: "1990",
    },
    {
        id:10,
      title: "The Six Sigma Way",
      authors: ["Peter S. Pande et al", "Robert P. Neuman", "Roland R. Cavanagh"],
      publisher: "McGraw Hill",
      year: "2000",
    },
    {
        id:11,
      title:
        "The innovator's dilemma: When new technologies cause great firms to fail",
      authors: ["Clayton M. Christensen"],
      publisher: "Harvard Business School Press",
      year: "1997",
    },
    { 
        id:12,
      title: "The Essential Drucker",
      authors: ["Peter F. Drucker"],
      publisher: "Harper Business",
      year: "2001",
    },
  ];
let favorite=document.querySelector(".favorites")
 
function createFavorites(arr) {
    arr.forEach(element => {
        favorite.innerHTML+=   `
        <li
    class="list-group-item list-group-item-success my-2 d-flex justify-content-between align-items-center rounded"
  >
    <span>${element.publisher}</span>
    <div>
      <button type="button" class="btn btn-danger">Delete</button>
    </div>
  </li>
        `
    });
}