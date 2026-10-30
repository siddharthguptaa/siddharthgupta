import Icon from './Icon.jsx';

/* Small logos and badges so visitors recognise a technology at a glance.
   Brand logos are simplified. To add one, add an SVG to BRAND and a pattern to RULES. */
const BRAND = {
  "react": "<svg viewBox=\"0 0 24 24\" aria-hidden=\"true\"><g fill=\"none\" stroke=\"#20A8D8\" stroke-width=\"1.5\"><ellipse cx=\"12\" cy=\"12\" rx=\"10\" ry=\"4\"/><ellipse cx=\"12\" cy=\"12\" rx=\"10\" ry=\"4\" transform=\"rotate(60 12 12)\"/><ellipse cx=\"12\" cy=\"12\" rx=\"10\" ry=\"4\" transform=\"rotate(120 12 12)\"/></g><circle cx=\"12\" cy=\"12\" r=\"1.9\" fill=\"#20A8D8\"/></svg>",
  "js": "<svg viewBox=\"0 0 24 24\" aria-hidden=\"true\"><rect width=\"24\" height=\"24\" rx=\"5\" fill=\"#F7DF1E\"/><text x=\"12\" y=\"16.0\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"800\" fill=\"#111\" font-family=\"Arial,Helvetica,sans-serif\">JS</text></svg>",
  "jq": "<svg viewBox=\"0 0 24 24\" aria-hidden=\"true\"><rect width=\"24\" height=\"24\" rx=\"5\" fill=\"#0868AC\"/><text x=\"12\" y=\"15.6\" text-anchor=\"middle\" font-size=\"10\" font-weight=\"800\" fill=\"#fff\" font-family=\"Arial,Helvetica,sans-serif\">jQ</text></svg>",
  "html": "<svg viewBox=\"0 0 24 24\" aria-hidden=\"true\"><path d=\"M3 2l1.7 19L12 23l7.3-2L21 2z\" fill=\"#E44D26\"/><text x=\"12\" y=\"16.2\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"800\" fill=\"#fff\" font-family=\"Arial,Helvetica,sans-serif\">5</text></svg>",
  "css": "<svg viewBox=\"0 0 24 24\" aria-hidden=\"true\"><path d=\"M3 2l1.7 19L12 23l7.3-2L21 2z\" fill=\"#1572B6\"/><text x=\"12\" y=\"16.2\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"800\" fill=\"#fff\" font-family=\"Arial,Helvetica,sans-serif\">3</text></svg>",
  "tailwind": "<svg viewBox=\"0 0 24 24\" aria-hidden=\"true\"><path fill=\"#06B6D4\" d=\"M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z\"/></svg>",
  "chakra": "<svg viewBox=\"0 0 24 24\" aria-hidden=\"true\"><rect width=\"24\" height=\"24\" rx=\"5\" fill=\"#319795\"/><text x=\"12\" y=\"15.6\" text-anchor=\"middle\" font-size=\"10\" font-weight=\"800\" fill=\"#fff\" font-family=\"Arial,Helvetica,sans-serif\">Ch</text></svg>",
  "cs": "<svg viewBox=\"0 0 24 24\" aria-hidden=\"true\"><path d=\"M12 1.5l9 5.25v10.5L12 22.5 3 17.25V6.75z\" fill=\"#6F42C1\"/><text x=\"12\" y=\"15.8\" text-anchor=\"middle\" font-size=\"9.5\" font-weight=\"800\" fill=\"#fff\" font-family=\"Arial,Helvetica,sans-serif\">C#</text></svg>",
  "net": "<svg viewBox=\"0 0 24 24\" aria-hidden=\"true\"><rect width=\"24\" height=\"24\" rx=\"5\" fill=\"#512BD4\"/><text x=\"12\" y=\"14.9\" text-anchor=\"middle\" font-size=\"8\" font-weight=\"800\" fill=\"#fff\" font-family=\"Arial,Helvetica,sans-serif\">.NET</text></svg>",
  "ef": "<svg viewBox=\"0 0 24 24\" aria-hidden=\"true\"><rect width=\"24\" height=\"24\" rx=\"5\" fill=\"#512BD4\"/><text x=\"12\" y=\"15.6\" text-anchor=\"middle\" font-size=\"10\" font-weight=\"800\" fill=\"#fff\" font-family=\"Arial,Helvetica,sans-serif\">EF</text></svg>",
  "ado": "<svg viewBox=\"0 0 24 24\" aria-hidden=\"true\"><rect width=\"24\" height=\"24\" rx=\"5\" fill=\"#512BD4\"/><text x=\"12\" y=\"14.9\" text-anchor=\"middle\" font-size=\"8\" font-weight=\"800\" fill=\"#fff\" font-family=\"Arial,Helvetica,sans-serif\">ADO</text></svg>",
  "sql": "<svg viewBox=\"0 0 24 24\" aria-hidden=\"true\"><g fill=\"none\" stroke=\"#0E7490\" stroke-width=\"1.8\" stroke-linecap=\"round\"><ellipse cx=\"12\" cy=\"6\" rx=\"8\" ry=\"3\"/><path d=\"M4 6v12c0 1.7 3.6 3 8 3s8-1.3 8-3V6M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3\"/></g></svg>",
  "mysql": "<svg viewBox=\"0 0 24 24\" aria-hidden=\"true\"><rect width=\"24\" height=\"24\" rx=\"5\" fill=\"#00758F\"/><text x=\"12\" y=\"15.6\" text-anchor=\"middle\" font-size=\"10\" font-weight=\"800\" fill=\"#fff\" font-family=\"Arial,Helvetica,sans-serif\">My</text></svg>",
  "azure": "<svg viewBox=\"0 0 24 24\" aria-hidden=\"true\"><path d=\"M7 19h10a4 4 0 0 0 .7-7.9A6 6 0 0 0 6.3 10 4.5 4.5 0 0 0 7 19z\" fill=\"#0078D4\"/></svg>",
  "azdo": "<svg viewBox=\"0 0 24 24\" aria-hidden=\"true\"><rect width=\"24\" height=\"24\" rx=\"5\" fill=\"#0078D4\"/><text x=\"12\" y=\"15.6\" text-anchor=\"middle\" font-size=\"10\" font-weight=\"800\" fill=\"#fff\" font-family=\"Arial,Helvetica,sans-serif\">DO</text></svg>",
  "git": "<svg viewBox=\"0 0 24 24\" aria-hidden=\"true\"><rect x=\"3.8\" y=\"3.8\" width=\"16.4\" height=\"16.4\" rx=\"2.5\" transform=\"rotate(45 12 12)\" fill=\"#F05033\"/><g stroke=\"#fff\" stroke-width=\"1.7\" fill=\"none\" stroke-linecap=\"round\"><path d=\"M9.5 8.5v7M9.5 12h3.6a1.4 1.4 0 0 0 1.4-1.4V9\"/></g><g fill=\"#fff\"><circle cx=\"9.5\" cy=\"8.5\" r=\"1.5\"/><circle cx=\"9.5\" cy=\"15.5\" r=\"1.5\"/><circle cx=\"14.5\" cy=\"8.5\" r=\"1.5\"/></g></svg>",
  "github": "<svg viewBox=\"0 0 24 24\" aria-hidden=\"true\"><path d=\"M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></svg>",
  "copilot": "<svg viewBox=\"0 0 24 24\" aria-hidden=\"true\"><rect width=\"24\" height=\"24\" rx=\"5\" fill=\"#6E40C9\"/><text x=\"12\" y=\"15.6\" text-anchor=\"middle\" font-size=\"10\" font-weight=\"800\" fill=\"#fff\" font-family=\"Arial,Helvetica,sans-serif\">Co</text></svg>",
  "claude": "<svg viewBox=\"0 0 24 24\" aria-hidden=\"true\"><path d=\"M12 2.5v19M2.5 12h19M5.3 5.3l13.4 13.4M18.7 5.3L5.3 18.7\" fill=\"none\" stroke=\"#D97757\" stroke-width=\"2.4\" stroke-linecap=\"round\"/></svg>",
  "bb": "<svg viewBox=\"0 0 24 24\" aria-hidden=\"true\"><rect width=\"24\" height=\"24\" rx=\"5\" fill=\"#2684FF\"/><text x=\"12\" y=\"15.6\" text-anchor=\"middle\" font-size=\"10\" font-weight=\"800\" fill=\"#fff\" font-family=\"Arial,Helvetica,sans-serif\">Bb</text></svg>",
  "tfs": "<svg viewBox=\"0 0 24 24\" aria-hidden=\"true\"><rect width=\"24\" height=\"24\" rx=\"5\" fill=\"#68217A\"/><text x=\"12\" y=\"14.9\" text-anchor=\"middle\" font-size=\"8\" font-weight=\"800\" fill=\"#fff\" font-family=\"Arial,Helvetica,sans-serif\">TFS</text></svg>",
  "svn": "<svg viewBox=\"0 0 24 24\" aria-hidden=\"true\"><rect width=\"24\" height=\"24\" rx=\"5\" fill=\"#5B7DB1\"/><text x=\"12\" y=\"14.9\" text-anchor=\"middle\" font-size=\"8\" font-weight=\"800\" fill=\"#fff\" font-family=\"Arial,Helvetica,sans-serif\">SVN</text></svg>",
  "jira": "<svg viewBox=\"0 0 24 24\" aria-hidden=\"true\"><rect width=\"24\" height=\"24\" rx=\"5\" fill=\"#0052CC\"/><text x=\"12\" y=\"15.6\" text-anchor=\"middle\" font-size=\"10\" font-weight=\"800\" fill=\"#fff\" font-family=\"Arial,Helvetica,sans-serif\">Ji</text></svg>",
  "iis": "<svg viewBox=\"0 0 24 24\" aria-hidden=\"true\"><rect width=\"24\" height=\"24\" rx=\"5\" fill=\"#0C5FA8\"/><text x=\"12\" y=\"14.9\" text-anchor=\"middle\" font-size=\"8\" font-weight=\"800\" fill=\"#fff\" font-family=\"Arial,Helvetica,sans-serif\">IIS</text></svg>",
  "jest": "<svg viewBox=\"0 0 24 24\" aria-hidden=\"true\"><rect width=\"24\" height=\"24\" rx=\"5\" fill=\"#C21325\"/><text x=\"12\" y=\"15.6\" text-anchor=\"middle\" font-size=\"10\" font-weight=\"800\" fill=\"#fff\" font-family=\"Arial,Helvetica,sans-serif\">Je</text></svg>",
  "jm": "<svg viewBox=\"0 0 24 24\" aria-hidden=\"true\"><rect width=\"24\" height=\"24\" rx=\"5\" fill=\"#D22128\"/><text x=\"12\" y=\"15.6\" text-anchor=\"middle\" font-size=\"10\" font-weight=\"800\" fill=\"#fff\" font-family=\"Arial,Helvetica,sans-serif\">JM</text></svg>",
  "pm": "<svg viewBox=\"0 0 24 24\" aria-hidden=\"true\"><rect width=\"24\" height=\"24\" rx=\"5\" fill=\"#FF6C37\"/><text x=\"12\" y=\"15.6\" text-anchor=\"middle\" font-size=\"10\" font-weight=\"800\" fill=\"#fff\" font-family=\"Arial,Helvetica,sans-serif\">Pm</text></svg>",
  "sw": "<svg viewBox=\"0 0 24 24\" aria-hidden=\"true\"><rect width=\"24\" height=\"24\" rx=\"5\" fill=\"#4C9A1E\"/><text x=\"12\" y=\"15.6\" text-anchor=\"middle\" font-size=\"10\" font-weight=\"800\" fill=\"#fff\" font-family=\"Arial,Helvetica,sans-serif\">Sw</text></svg>"
};

// [pattern, key]: the first pattern that matches the label wins.
const RULES = [["^react", "react"], ["^javascript$", "js"], ["^jquery", "jq"], ["^html", "html"], ["^css$", "css"], ["tailwind", "tailwind"], ["chakra", "chakra"], ["^c#$", "cs"], ["ado\\.net", "ado"], ["entity framework|ef core|^ef$", "ef"], ["\\.net|asp\\.net|^mvc|web forms|wcf|linq|web api", "net"], ["^sql$", "sql"], ["mysql", "mysql"], ["azure devops", "azdo"], ["^azure", "azure"], ["^git$", "git"], ["github copilot", "copilot"], ["^github$", "github"], ["bitbucket", "bb"], ["^tfs", "tfs"], ["^svn", "svn"], ["jira", "jira"], ["^iis", "iis"], ["^jest", "jest"], ["jmeter", "jm"], ["postman", "pm"], ["swagger", "sw"], ["^claude", "claude"]];

// Labels that get a plain line icon instead of a logo.
const GENERIC = [["ci/cd", "sync"], ["^tdd|^bdd", "check"], ["secure coding|vulnerability", "lock"], ["^solid", "branch"], ["design patterns|microservices|onion", "layers"], ["rest and soap", "api"], ["llm|prompt|ai-assisted", "spark"]];

/** <TechIcon label="React 18" /> shows the matching icon, or nothing if there is none. */
export default function TechIcon({ label }) {
  const brand = RULES.find(([re]) => new RegExp(re, 'i').test(label));
  if (brand) {
    return (
      <span
        className="inline-grid h-[18px] w-[18px] shrink-0 place-items-center text-ink [&>svg]:block [&>svg]:h-[18px] [&>svg]:w-[18px]"
        dangerouslySetInnerHTML={{ __html: BRAND[brand[1]] }}
      />
    );
  }
  const generic = GENERIC.find(([re]) => new RegExp(re, 'i').test(label));
  if (generic) {
    return (
      <span className="inline-grid h-[18px] w-[18px] shrink-0 place-items-center text-accent">
        <Icon name={generic[1]} className="h-[18px] w-[18px]" />
      </span>
    );
  }
  return null;
}
