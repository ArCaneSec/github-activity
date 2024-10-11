# GitHub Activity CLI

A simple CLI tool that retrieves the recent GitHub activity of a user based on their username and displays it along with the exact date.

## Supported Events

The tool currently supports the following GitHub events:

1.  **PushEvent**: Commits made by the user.
2.  **WatchEvent**: When the user stars a repository.
3.  **IssuesEvent**: When the user opens, edits, closes, reopens, assigns, unassigns, labels, or unlabeled an issue.
4.  **PublicEvent**: When the user makes a repository public.
5.  **ForkEvent**: When the user forks a repository.
6.  **PullRequestEvent**: Activity on pull requests such as opening, editing, closing, reopening, assigning, unassigning, requesting a review, removing a review request, labeling, unlabeled, or synchronizing.
7.  **CreateEvent**: When the user creates a branch, tag, or repository.
8.  **DeleteEvent**: When the user deletes a branch or tag.

## Prerequisites

-   [Node.js](https://nodejs.org/) installed on your machine.

## Installation

1.  Clone the repository:
```bash
git clone https://github.com/ArCaneSec/github-activity.git
```
2.  Navigate to the project directory:
```bash
cd github-activity-cli
```
3.  Install the required dependencies.
 ```bash
npm install
 ```

## Usage

To fetch the recent activity of a GitHub user, run the following command:

```bash
node src/app.js <github-username>
```
Example:
```bash
node /src/app.js ArCaneSec
```
The tool will display the recent events for the specified GitHub user along with the date on which each event occurred.

## Contributing

Feel free to submit a pull request if you’d like to contribute or improve the tool!

## License

This project is licensed under the MIT License - see the [LICENSE](https://github.com/ArCaneSec/github-activity/blob/master/LICENSE) file for details.