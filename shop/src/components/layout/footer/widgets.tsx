import Container from "@components/ui/container";
import WidgetLink from "@components/widgets/widget-link";


interface WidgetsProps {
  widgets: {
    id: number;
    widgetTitle: string;
    lists: any;
  }[];
}

const Widgets: React.FC<WidgetsProps> = ({ widgets }) => {
  return (
    <Container>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 md:gap-9 lg:gap-x-8 pb-9 md:pb-14 lg:pb-16 2xl:pb-20 3xl:pb-24 lg:mb-0.5 2xl:mb-0 3xl:-mb-1 text-white">

       
        {widgets.map((widget, index) => (
          <WidgetLink data={widget} key={`widget-link-${index}`} />
        ))}
      </div>
    </Container>
  );
};

export default Widgets;
