import Geom from "@rbxts/geom";
import Types from "@rbxts/geom/Output/Types";

export function Delaunay(Points: Vector2[], Convex: number = 1e3): Types.Triangle[] {
    const Vertices: Vector2[] = [];
    const Triangles: Types.Triangle[] = [];
    
    const Count = Points.size();

    if (Count < 3) return Triangles;

    const MaxTriangles = Count * 4;

    let MinX = Points[0].X, MinY = Points[0].Y;
    let MaxX = MinX, MaxY = MinY;

    for (const [ , Point ] of ipairs(Points)) {
        if (Point.X < MinX) MinX = Point.X;
        if (Point.Y < MinY) MinY = Point.Y;
        if (Point.X > MaxX) MaxX = Point.X;
        if (Point.Y > MaxY) MaxY = Point.Y;
    };

    const DeltaX = (MaxX - MinX) * Convex, DeltaY = (MaxY - MinY) * Convex;
    const DeltaMax = math.max(DeltaX, DeltaY);
    const MidX = (MaxX + MinX) / 2, MidY = (MaxY + MinY) / 2;

    const P1 = new Vector2(MidX - 20 * DeltaMax, MidY - DeltaMax);
    const P2 = new Vector2(MidX, MidY + 20 * DeltaMax);
    const P3 = new Vector2(MidX + 20 * DeltaMax, MidY - DeltaMax);

    Vertices.push(P1, P2, P3);
    Triangles.push(Geom.ToTriangle(P1, P2, P3));

    for (const Point of Points) {
        const Edges: Types.Edge[] = [];
        const TriangleCount = Triangles.size();

        for (const Index of $range(TriangleCount, 1, -1)) {
            const Triangle = Triangles[Index - 1];

            if (Geom.Circumcircle.In(Triangle, Point)) {
                const [ P, Q, R ] = [ Triangle.P, Triangle.Q, Triangle.R ];
                
                Edges.push(
                    Geom.ToEdge(P, Q),
                    Geom.ToEdge(Q, R),
                    Geom.ToEdge(R, P)    
                );

                Triangles.remove(Index);
            };
        };

        for (const J of Edges) {
            for (const K of Edges) {
                if ((J !== K) && (J.S === K.S) && (J.E === K.E)) {
                    Edges.remove(Edges.indexOf(J));
                    Edges.remove(Edges.indexOf(K));
                };
            };
        };

        for (const Edge of Edges) {
            Triangles.push(Geom.ToTriangle(Edge.S, Edge.E, Point));
        };
    };

    /*
    let Vertex = 0;
    for (const Triangle of Triangles) {
        
    };
    */

    return Triangles;
};