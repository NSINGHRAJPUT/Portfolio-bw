import { uiComponentCatalog, uiComponentCategories, uiIndependenceRules } from "@/config/ui-component-catalog";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

export function UiComponentCatalog() {
  return (
    <section className="container-safe py-16">
      <div className="mb-8 space-y-3">
        <Badge variant="primary">Reusable UI Inventory</Badge>
        <h1 className="text-4xl font-semibold md:text-5xl">Independent Component Catalog</h1>
        <p className="max-w-3xl text-sm text-muted">
          This catalog defines reusable UI building blocks for NSRGFX. Each component is independent and can be
          composed safely across pages and features.
        </p>
      </div>

      <div className="space-y-8">
        {uiComponentCategories.map((category) => (
          <div className="space-y-3" key={category}>
            <h2 className="text-xl font-medium">{category}</h2>
            <div className="grid gap-3 md:grid-cols-2">
              {uiComponentCatalog
                .filter((component) => component.category === category)
                .map((component) => (
                  <Card className="space-y-2" key={component.name}>
                    <p className="text-sm font-medium">{component.name}</p>
                    <p className="text-sm text-muted">{component.description}</p>
                  </Card>
                ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10 space-y-3">
        <h2 className="text-xl font-medium">Independence Rules</h2>
        <div className="grid gap-3 md:grid-cols-2">
          {uiIndependenceRules.map((rule) => (
            <Card className="space-y-2" key={rule.title}>
              <p className="text-sm font-medium">{rule.title}</p>
              <p className="text-sm text-muted">{rule.detail}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
