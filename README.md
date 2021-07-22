# Frontend Assessment

This is my submission for the Frontend mockup of the student app. It was built using React Hooks.

## Installation

Use the node package manager [npm].

```bash
npm install
```

## Usage

```python
npm start

# Compiled successfully!
# You can now view hatchway-frontend in the browser.

#Local:            http://localhost:3000
```

## Notes

Total worktime ~13 hours.

Please note my use of prop-drilling for the students data gained from the api request. I continually considered using useContext hook to manage a global state but ultimately decided against it as the depth of my prop-drilling didn't become too cumbersome to reason about.

Also, would like to highlight the pattern used for immediate filtering onChange event was new to me and I made the best implementation I could while maintaining best practice. This is also why I decided to only make an initial API request for student and treat that as my 'one-source-of-truth'.
