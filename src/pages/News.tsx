import { Card } from '../components/Card';
import { Layout } from '../components';
import { Entrances } from '../utils/Entrances';

export const News = () => {
    return (
        <div className="p-6" >
            

            <Layout>
                {
                    Entrances.map((entrance) => (
                        <Card key={entrance.id} entrance={entrance} />
                    ))
                }
            </Layout>
        </div>
    );
}
