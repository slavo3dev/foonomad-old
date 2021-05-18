import { ButtonEvents } from "../../ui";
import classes from "./results-title.module.css";

export function ResultsTitle(props) {
  const { date } = props;

  const humanReadableDate = new Date(date).toLocaleDateString(
    "en-US",
    {
      month: "long",
      year: "numeric",
    },
  );

  return (
    <section className={classes.title}>
      <h1>Events in {humanReadableDate}</h1>
      <ButtonEvents link="/events">Show all events</ButtonEvents>
    </section>
  );
}
